import React from "react";
import style from "./Sidebar.module.css";
import { useHistory } from "react-router-dom";
// assets
import {
  logo,
  dashboardIcon,
  twoPeople,
  dataParsial,
  dataPotensial,
  setting,
  logout,
} from "../../assets";

// components
import { Button } from "../../components";

export const Sidebar = (props) => {
  const history = useHistory();
  const sidebarActive = props.sidebarActive;

  const type = ["inActive"];

  const navHomeHandler = () => {
    history.push("/");
  };

  const navPotensialHandler = () => {
    history.push("/Data_BOD_Potensial");
  };

  const navParsialHandler = () => {
    history.push("/Data_BOD_Parsial");
  };

  const navUserHandler = () => {
    history.push("/Data_User");
  };

  const navSettingHandler = () => {
    history.push("/Setting_Dashboard");
  };

  return (
    <div className={sidebarActive ? style.container : style.hide}>
      <div className={style.logo__container}>
        <img src={logo} alt="" />
      </div>

      <div className={style.button__container}>
        <Button
          sidebarType={type[0]}
          icon
          iconSrc={dashboardIcon}
          onClick={navHomeHandler}
          iconAlt=""
        >
          Dashboard
        </Button>

        <Button
          sidebarType={type[0]}
          icon
          iconSrc={dataPotensial}
          onClick={navPotensialHandler}
          iconAlt=""
        >
          Data BOD Potensial
        </Button>

        <Button
          sidebarType={type[0]}
          icon
          iconSrc={dataParsial}
          iconAlt=""
          onClick={navParsialHandler}
        >
          Data BOD Parsial
        </Button>

        <Button
          sidebarType={type[0]}
          icon
          iconSrc={twoPeople}
          iconAlt=""
          onClick={navUserHandler}
        >
          Data User
        </Button>

        <Button
          sidebarType={type[0]}
          icon
          iconSrc={setting}
          iconAlt=""
          onClick={navSettingHandler}
        >
          Setting Dashboard
        </Button>
      </div>

      <div className={style.button__logout}>
        <Button logout icon iconSrc={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
