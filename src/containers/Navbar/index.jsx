import React from "react";
import { NavbarMobile, SearchBar, Typography } from "../../components";
import style from "./Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const username = useSelector((state) => state.auth.username);

  return (
    <div className={style.container}>
      <Typography name={username} header={props.header} />
      <SearchBar />
      <NavbarMobile />
    </div>
  );
};

export default Navbar;
