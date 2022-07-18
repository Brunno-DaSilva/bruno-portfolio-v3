import React, { Fragment } from "react";
import { Navbar } from "../Components";
import { Footer } from "../container";
import { Outlet } from "react-router-dom";

import "./Layout.scss";

const Layout = ({ theme, changeTheme }) => {
  return (
    <Fragment className="layout">
      <Navbar theme={theme} changeTheme={changeTheme} />
      <Outlet />
      <Footer theme={theme} />
    </Fragment>
  );
};

export default Layout;
