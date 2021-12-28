import React from "react";
import style from "./Table.module.css";

import { useTable } from "react-table";
import { Button } from "..";

const Table = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const onUpdateHandler = (slug) => {
    console.log(slug);
  };

  const onDeleteHandler = (slug) => {
    console.log(slug);
  };

  return (
    <div className={style.container}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td className={style.action__container}>
                  <Button
                    primary
                    height={30}
                    onClick={() => onUpdateHandler(row.original.id)}
                  >
                    Update
                  </Button>
                  <Button
                    danger
                    height={30}
                    onClick={() => onDeleteHandler(row.original.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
