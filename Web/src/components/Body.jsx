import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Panel from "./panel/Panel";
import Catalogue from "./catalogue/Catalogue";
import Market from "./market/Market";
import LogIn from "./login/LogIn";

const Body = () => {
  return (
    <Router>
      <Switch>
        <Route path="/panel">
          <Panel></Panel>
        </Route>
        <Route path="/catalogue">
          <Catalogue></Catalogue>
        </Route>
        <Route path="/market">
          <Market></Market>
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
      </Switch>
    </Router>
  );
};

export default Body;
