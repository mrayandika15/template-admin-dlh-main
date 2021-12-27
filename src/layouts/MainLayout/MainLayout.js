import React from "react";
import { Sidebar } from "../../containers";
import style from "./MainLayout.module.css";

export const MainLayout = (props) => {
  return (
    <div className={style.container}>
      <Sidebar sidebarActive={props.sidebarActive} />
      {props.children}
    </div>
  );
};
