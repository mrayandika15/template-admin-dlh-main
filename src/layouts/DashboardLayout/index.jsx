import React from "react";
import style from "./DashboardLayout.module.css";

const DashboardLayout = (props) => {
  return <div className={style.container}>{props.children}</div>;
};

export default DashboardLayout;
