import React, { useMemo, useState } from "react"
import { useTable, useRowSelect, useSortBy, useGlobalFilter } from 'react-table'
import { Checkbox } from "../Forms/FormCheckbox"
import Card from "../Elements/card"
import { BsFillTrashFill as TrashCan } from 'react-icons/bs'
import { FaUserPlus as AddIcon } from 'react-icons/fa'
import ButtonPrimary from '../Elements/buttonPrimary';
import { GlobalFilter } from "../Elements/GlobalFilter"

function PrimaryTable({tableColumns, entryData}) {
    
    const columns = useMemo (() => tableColumns, [tableColumns])
    const data = useMemo (() => entryData, [entryData])
    let tableInstance = useTable({
        columns,
        data
    },
    useGlobalFilter,
    useSortBy,
    useRowSelect, (hooks) => {
        hooks.visibleColumns.push((columns) => {
            return [
                {
                    id: 'Selection',
                    Header: ({getToggleAllRowsSelectedProps}) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()}/>
                    ),
                    Cell: ({ row }) => (
                        <Checkbox {...row.getToggleRowSelectedProps()}/>
                    )
                },
                ...columns,
            ]
        })
    }
    )

    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
        selectedFlatRows,
        preGlobalFilteredRows,
        setGlobalFilter,
        state
    } = tableInstance

    const [tRows, settRows] = useState(rows)

    let selectedRows = JSON.stringify(
        {
            selectedFlatRows: selectedFlatRows.map((row) => row.original),
        },
        null,
        2
    )
    
    // let selectedRowIds_ = JSON.stringify(
    //     {
    //         selectedRowIds: selectedRowIds
    //     },
    //     null,
    //     2
    // )
    
    return (
        <>
        <div className = "Requisition">
            <Card>
                <div className='contentHeader flex justify-between'>
                    <ButtonPrimary addClass='bg-[#F47E7E] text-[#FFFFFF] flex align-center border-none' 
                    onClick={() => {
                        let temp_data = tRows
                        let newData = tRows
                        let selected_data = JSON.parse(selectedRows)
                        // console.log(selected_data.selectedFlatRows)
                        // console.log(temp_data)
                        for(let i in temp_data) {
                            for (let j in selected_data.selectedFlatRows){
                                // console.log(temp_data[i].values.ID)
                                if (temp_data[i].values.ID === selected_data.selectedFlatRows[j].ID){
                                    delete newData[i]
                                }
                            }
                        }
                        settRows(newData)
                    }}
                    > 
                        <span className='pt-1 mr-1'><TrashCan/></span>Delete
                    </ButtonPrimary>
                    <div className='flex'>
                        {/* <FormSelect defValue={'Filter'} addClass='text-[#7F8289] rounded-lg py-1 pr-9 pl-12 bg-[#FFFFFF] drop-shadow-xl' icon={<Filter className='text-[#7F8289] bottom-2 left-7 absolute '/>}></FormSelect> */}
                        <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilter} placeHolder={'Search here'} addClass='ml-5 drop-shadow-xl'/>
                        <ButtonPrimary addClass='bg-[#2B4993] text-[#FFFFFF] flex ml-5'>
                            <span className='pt-1 mr-1'><AddIcon/></span>Add Candidate
                        </ButtonPrimary>
                    </div>
                </div>
                <table {...getTableProps()} className="w-full mt-5 text-left">
                    <thead>
                        {
                            headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {
                                        headerGroup.headers.map( column => (
                                            <th className="bg-[#D3D3D3] pl-5 text-[#2C2C2C] py-4 px-2 first:rounded-l-[15px] last:rounded-r-[15px]" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                {column.render('Header')}
                                                {column.isSorted ? (column.isSortedDesc ? " ⇃" : " ↾") : " ⥯"}
                                            </th>
                                        ))
                                    }
                                    
                                </tr>
                            ))}
                    </thead>
                    <tbody className="" {...getTableBodyProps}>
                        {
                            tRows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr className="hover:bg-[#5179DF] hover:bg-opacity-25" {...row.getRowProps()}>
                                        {
                                            row.cells.map((cell) => {
                                                return <td className="p-5 border-b-[0.5px] border-[#D3D3D3]" {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            })
                                        }
                                    </tr>
                                )
                            })

                        }
                        
                    </tbody>
                </table>
            </Card>
        </div>
            {/* <pre>
                <code>
                    { JSON.stringify(
                        {
                            selectedRowIds: selectedRowIds,
                            selectedFlatRows: selectedFlatRows.map((row) => row.original),
                        },
                        null,
                        2
                    )}
                </code>
            </pre> */}
        </>
    )
}

export default PrimaryTable;