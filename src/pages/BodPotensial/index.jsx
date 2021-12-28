import React, { useState, useEffect, useMemo } from "react";

import { ListTable, Navbar } from "../../containers";
import { DashboardLayout } from "../../layouts";
import { getDataBod } from "../../services/BODPotensial";

const BodPotensial = () => {
  const [Bod, setBod] = useState([]);

  useEffect(() => {
    const fetchDataBOD = async () => {
      const res = await getDataBod();

      setBod(res);
    };
    fetchDataBOD();
  }, []);

  const columns = [
    {
      Header: "Jumlah Penduduk",
      accessor: "JmlPenduduk",
    },
    {
      Header: "Rasio Ekuivalen",
      accessor: "RasioEkivalen",
    },
    {
      Header: "Alfa",
      accessor: "Alfa",
    },
    {
      Header: "Faktor Emisi Penduduk",
      accessor: "FaktorEmisiPenduduk",
    },
    {
      Header: "Hasil Sektor",
      accessor: "HasilSektor",
    },
  ];

  return (
    <DashboardLayout>
      <Navbar header="Data BOD Potensial" />
      <ListTable listColumns={columns} listData={Bod} createTable="Buat Data" />
    </DashboardLayout>
  );
};

export default BodPotensial;
