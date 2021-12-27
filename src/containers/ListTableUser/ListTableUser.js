import React, { useMemo } from "react";
import { Button, Card, Table } from "../../components";
import { useEffect, useState } from "react";
import { readUser } from "../../services/User";

import style from "./ListTableUser.module.css";

export const ListTableUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const readFetchUser = async () => {
      const res = await readUser();

      setUser(res);
    };

    readFetchUser();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "email",
        accessor: "email",
      },
    ],
    []
  );

  return (
    <div className={style.container}>
      <div className={style.container__button}>
        <Button primary> Buat Akun </Button>
      </div>
      <div className={style.container__form}>
        <Card>
          <Table columns={columns} data={user} />
        </Card>
      </div>
    </div>
  );
};
