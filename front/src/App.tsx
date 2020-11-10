import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import AppBody from "./AppBody";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

function App() {
  return (
    <Router>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </Router>
  );
}

export default App;
