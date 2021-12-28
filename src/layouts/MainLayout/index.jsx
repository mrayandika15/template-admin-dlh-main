import React from "react";
import { Sidebar } from "../../containers";
import style from "./MainLayout.module.css";

const MainLayout = (props) => {
  return (
    <div className={style.container}>
      <Sidebar sidebarActive={props.sidebarActive} />
      {props.children}
    </div>
  );
};

export default MainLayout;
