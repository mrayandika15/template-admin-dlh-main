import React from "react";
import style from "./BannerAuth.module.css";

// image
import { logo } from "../../assets";

export default function BannerAuth() {
  return (
    <div className={style.container}>
      <img src={logo} alt="" />
    </div>
  );
}
