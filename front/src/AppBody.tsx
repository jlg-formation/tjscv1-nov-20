import React from "react";
import { Route, Switch } from "react-router-dom";

import "./AppBody.scss";
import Create from "./routes/Create";
import Home from "./routes/Home";
import Legal from "./routes/Legal";
import Stock from "./routes/Stock";

function AppBody() {
  return (
    <Switch>
      <Route path="/legal">
        <Legal />
      </Route>
      <Route path="/stock">
        <Stock />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default AppBody;
