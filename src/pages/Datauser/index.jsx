import React, { useMemo, useState, useEffect } from "react";

import { ListTable, Navbar } from "../../containers";
import { DashboardLayout } from "../../layouts";
import { readUser } from "../../services/User";

const Datauser = () => {
  const [User, setUser] = useState([]);

  useEffect(() => {
    const fetchDataUser = async () => {
      const res = await readUser();

      setUser(res);
    };

    fetchDataUser();
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
    <DashboardLayout>
      <Navbar header="Data User" />
      <ListTable
        listColumns={columns}
        listData={User}
        createTable="Buat Akun"
      />
    </DashboardLayout>
  );
};

export default Datauser;
