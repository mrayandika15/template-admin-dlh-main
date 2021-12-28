import React from "react";
import style from "./HomeLayout.module.css";

export default function HomeLayout(props) {
  return <div className={style.container}>{props.children}</div>;
}
