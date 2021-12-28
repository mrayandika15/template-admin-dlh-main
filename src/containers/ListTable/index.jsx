import React from "react";
import { Button, Card, Table } from "../../components";

import style from "./ListTable.module.css";

const ListTable = ({ listColumns, listData, createTable }) => {
  return (
    <div className={style.container}>
      <div className={style.container__button}>
        <Button primary> {createTable}</Button>
      </div>
      <div className={style.container__form}>
        <Card>
          <Table columns={listColumns} data={listData} />
        </Card>
      </div>
    </div>
  );
};

export default ListTable;
