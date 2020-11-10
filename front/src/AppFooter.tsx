import React from "react";
import { Link } from "react-router-dom";

import "./AppFooter.scss";

function AppFooter() {
  return (
    <footer>
      <Link to="/legal">Mentions Légales</Link>
    </footer>
  );
}

export default AppFooter;
