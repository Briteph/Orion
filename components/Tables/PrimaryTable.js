import React, { useMemo, useRef, useState } from "react";
import { BsFilter as FiltersIcon } from "react-icons/bs";
import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import FormCheckbox from "../Forms/FormCheckbox";
import Card from "../Elements/Card";
import { BsFillTrashFill as TrashCan } from "react-icons/bs";
import { FaUserPlus as AddIcon } from "react-icons/fa";
import ButtonPrimary from "../Elements/ButtonPrimary";
import GlobalFilter from "../Elements/GlobalFilter";
import DropDown from "../Elements/DropDown";
import Link from "next/link";
import { useRouter } from "next/router";

function PrimaryTable({
  tableColumns,
  entryData,
  newEntryLabel,
  buttonUrl,
  rowUrl,
  statusValue,
  colIdxOfStatus,
}) {
  const router = useRouter();
  const dropDownRef = useRef(null);
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
              <FormCheckbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <FormCheckbox {...row.getToggleRowSelectedProps()} />
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
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  return (
    <>
      <div className="Requisition">
        <Card>
          <div className="contentHeader flex justify-between">
            <ButtonPrimary
              addClass="bg-[#F47E7E] text-[#FFFFFF] flex align-center border-none"
              onClick={() => {
                const filteredData = rows.filter((e) => {
                  return !e.isSelected;
                });
                const newData = [
                  ...filteredData.map((e) => {
                    return e.values;
                  }),
                ];
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
              <Link href={buttonUrl}>
                <ButtonPrimary addClass="bg-[#2B4993] text-[#FFFFFF] flex ml-5">
                  <span className="pt-1 mr-1">
                    <AddIcon />
                  </span>
                  {newEntryLabel}
                </ButtonPrimary>
              </Link>
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
              {rows.map((row, rowIndex) => {
                prepareRow(row);
                return (
                  <tr
                    className="hover:bg-[#5179DF] hover:bg-opacity-25"
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell, i) => {
                      return (
                        <>
                          {i !== 0 && i !== colIdxOfStatus ? (
                            <td
                              className="border-b-[0.5px] border-[#D3D3D3]"
                              {...cell.getCellProps()}
                            >
                              <div className="p-5 cursor-pointer" onClick={() => router.push(rowUrl)}>
                                {cell.render("Cell")}
                              </div>
                            </td>
                          ) : i === colIdxOfStatus ? (
                            <td
                              className="p-5 border-b-[0.5px] border-[#D3D3D3]"
                              {...cell.getCellProps()}
                            >
                              <DropDown
                                label={cell.render("Cell")}
                                labelClass="text-white"
                                iconClass="text-white"
                                menu={statusValue}
                                ref={dropDownRef}
                                buttonClass="w-28"
                                dropDownIcon={<FiltersIcon className="text-white"/>}
                                cardItemClass='justify-center'
                              >
                                {statusValue.map((status) => {
                                  return (
                                    <div
                                      className="hover:bg-[#5179DF] hover:bg-opacity-25 w-full px-3 rounded"
                                      onClick={() => {
                                        let newRowState = [...rowState];
                                        newRowState[rowIndex].Status =
                                          status.text;
                                        setRowState(newRowState);
                                        dropDownRef.current.setButtonColor(
                                          status.color
                                        );
                                        dropDownRef.current.toggle();
                                      }}
                                    >
                                      {status.text}
                                    </div>
                                  );
                                })}
                              </DropDown>
                            </td>
                          ) : (
                            <td
                              className="border-b-[0.5px] border-[#D3D3D3]"
                              {...cell.getCellProps()}
                            >
                              <div className="p-5">{cell.render("Cell")}</div>
                            </td>
                          )}
                        </>
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
