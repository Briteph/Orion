import React, { useMemo } from "react"
import { useTable } from 'react-table'


function Table({tableColumns, entryData}) {
    const columns = useMemo (() => tableColumns, [])
    const data = useMemo (() => entryData, [])
    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
    } = tableInstance

    return (
        <>
            <table {...getTableProps()} className="w-full mt-5 text-left">
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map( column => (
                                        <th className="bg-[#D3D3D3] pl-5 text-[#2C2C2C] py-4 px-2 first:rounded-l-[15px] last:rounded-r-[15px]" {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))
                                }
                                
                            </tr>
                        ))}
                </thead>
                <tbody className="" {...getTableBodyProps}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr className="hover:bg-[#F5F5F5]" {...row.getRowProps()}>
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
        </>
    )
}

export default Table;