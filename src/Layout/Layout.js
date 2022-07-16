import React, { Fragment } from "react";
import { Navbar } from "../Components";
import { Footer } from "../container";
import { Outlet } from "react-router-dom";

import "./Layout.scss";

const Layout = () => {
  return (
    <Fragment className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
