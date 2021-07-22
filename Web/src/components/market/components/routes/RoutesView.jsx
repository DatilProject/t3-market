import React from "react";
import { Switch, Route } from "react-router";
import {
  HomePageContainer,
  PortfolioPageContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/market" component={HomePageContainer} />
      <Route exact path="/market/templates" component={PortfolioPageContainer} />
    </Switch>
  );
};

export default RoutesView;
