import React from "react";

import "./AppHeader.scss";
import logo from "./logo.svg";

function AppHeader() {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="Logo Gestion de Stock" />
        <span>Gestion de stock</span>
      </a>
    </header>
  );
}

export default AppHeader;
