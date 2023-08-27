import React, { FC } from "react";
import { TableProps, TableType } from "./Table.types";

const ColumnElement: FC<TableType> = (column) => {
    return (
        <th> {column.title} </th>
    );
}

const RowElement = ({ data }: any) => {
    return (
        <tr>
            <td> {data.name} </td>
            <td> {data.age} </td>
        </tr>
    )
}

const Table: FC<TableProps> = ({ columns, data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns?.map(column => {
                        return <ColumnElement {...column} key={column.key} />
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item: any) => {
                    return (<RowElement data={item} key={item.key} />)
                })}
            </tbody>
        </table>
    )
}

export default Table;

