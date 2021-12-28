import React from "react";
import style from "./AuthLayout.module.css";

export default function AuthLayout(props) {
  return <div className={style.container}>{props.children}</div>;
}
