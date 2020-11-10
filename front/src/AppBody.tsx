import React from "react";
import { Route, Switch } from "react-router-dom";

import "./AppBody.scss";
import Home from "./routes/Home";
import Legal from "./routes/Legal";

function AppBody() {
  return (
    <Switch>
      <Route path="/legal">
        <Legal />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default AppBody;
