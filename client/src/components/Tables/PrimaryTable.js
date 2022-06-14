import React, { useMemo, useState } from "react";
import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import { Checkbox } from "../Forms/FormCheckbox";
import Card from "../Elements/card";
import { BsFillTrashFill as TrashCan } from "react-icons/bs";
import { FaUserPlus as AddIcon } from "react-icons/fa";
import ButtonPrimary from "../Elements/buttonPrimary";
import { GlobalFilter } from "../Elements/GlobalFilter";

function PrimaryTable({ tableColumns, entryData }) {
  const [colState, setColState] = useState(tableColumns);
  const [rowState, setRowState] = useState(entryData);
  const columns = useMemo(() => {
    return colState;
  }, [colState]);
  const data = useMemo(() => {
    return rowState;
  }, [rowState]);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "Selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  let selectedRows = JSON.stringify(
    {
      selectedFlatRows: selectedFlatRows.map((row) => row.original),
    },
    null,
    2
  );

  return (
    <>
      <div className="Requisition">
        <Card>
          <div className="contentHeader flex justify-between">
            <ButtonPrimary
              addClass="bg-[#F47E7E] text-[#FFFFFF] flex align-center border-none"
              onClick={() => {
                const selected_data = JSON.parse(selectedRows);
                let temp_data = [...rowState];
                let selectedIDs = [];
                for (let i of selected_data.selectedFlatRows) {
                  selectedIDs.push(i.ID);
                }
                const newData = temp_data.filter((e) => {
                  return !selectedIDs.includes(e.ID);
                });
                setRowState(newData);
              }}
            >
              <span className="pt-1 mr-1">
                <TrashCan />
              </span>
              Delete
            </ButtonPrimary>
            <div className="flex">
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                setGlobalFilter={setGlobalFilter}
                globalFilter={state.globalFilter}
                placeHolder={"Search here"}
                addClass="ml-5 drop-shadow-xl"
              />
              <ButtonPrimary addClass="bg-[#2B4993] text-[#FFFFFF] flex ml-5">
                <span className="pt-1 mr-1">
                  <AddIcon />
                </span>
                Add Candidate
              </ButtonPrimary>
            </div>
          </div>
          <table {...getTableProps()} className="w-full mt-5 text-left">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className="bg-[#D3D3D3] pl-5 text-[#2C2C2C] py-4 px-2 first:rounded-l-[15px] last:rounded-r-[15px]"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ⇃"
                          : " ↾"
                        : " ⥯"}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="" {...getTableBodyProps}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    className="hover:bg-[#5179DF] hover:bg-opacity-25"
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className="p-5 border-b-[0.5px] border-[#D3D3D3]"
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

export default PrimaryTable;
