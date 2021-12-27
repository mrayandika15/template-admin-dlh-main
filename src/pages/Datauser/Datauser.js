import React from "react";

import { ListTableUser, Navbar } from "../../containers";
import { DashboardLayout } from "../../layouts";

export const Datauser = () => {
  return (
    <DashboardLayout>
      <Navbar header="Data User" />
      <ListTableUser />
    </DashboardLayout>
  );
};
