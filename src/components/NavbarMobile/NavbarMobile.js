import React, { useState } from "react";
import { Button } from "..";
import {
  hamburgerIcon,
  logo,
  dashboardIcon,
  dataPotensial,
  dataParsial,
  twoPeople,
  setting,
  logout,
} from "../../assets";

import style from "./NavMobile.module.css";

export const NavbarMobile = () => {
  const [navToggler, setNavToggler] = useState(false);

  const navHandler = () => {
    setNavToggler(!navToggler);
  };

  return (
    <div className={style.container}>
      <Button navMobile icon iconSrc={hamburgerIcon} onClick={navHandler} />
      {navToggler && (
        <div className={style.nav__container}>
          <div className={style.logo__container}>
            <img src={logo} alt="" />
          </div>

          <div className={style.button__container}>
            <Button
              sidebarType="inActive"
              P
              icon
              iconSrc={dashboardIcon}
              iconAlt=""
            >
              Dashboard
            </Button>

            <Button
              sidebarType="inActive"
              icon
              iconSrc={dataPotensial}
              iconAlt=""
            >
              Data BOD Potensial
            </Button>

            <Button
              sidebarType="inActive"
              icon
              iconSrc={dataParsial}
              iconAlt=""
            >
              Data BOD Parsial
            </Button>

            <Button sidebarType="inActive" icon iconSrc={twoPeople} iconAlt="">
              Data User
            </Button>

            <Button sidebarType="inActive" icon iconSrc={setting} iconAlt="">
              Setting Dashboard
            </Button>
          </div>

          <div className={style.logout__container}>
            <Button logout icon iconSrc={logout}>
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
