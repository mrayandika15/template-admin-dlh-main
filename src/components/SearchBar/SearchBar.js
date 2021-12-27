import React from "react";
import style from "./SeachBar.module.css";

import { searchIcon } from "../../assets";

export const SearchBar = () => {
  return (
    <div className={style.container}>
      <div className={style.icon}>
        <img src={searchIcon} alt="" />
      </div>

      <input type="text" className={style.searchInput} placeholder="Search" />
    </div>
  );
};
