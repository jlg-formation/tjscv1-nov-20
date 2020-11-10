import React from "react";
import { Link } from "react-router-dom";

import "./AppHeader.scss";
import logo from "./logo.svg";

function AppHeader() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo Gestion de Stock" />
        <span>Gestion de stock</span>
      </Link>
    </header>
  );
}

export default AppHeader;
