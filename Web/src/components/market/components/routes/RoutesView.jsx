import React from "react";
import { Switch, Route } from "react-router";
import { HomePageContainer, PortfolioPageContainer } from "../containers";

const RoutesView = () => {
	return (
		<Switch>
			<Route exact path="/market" component={PortfolioPageContainer} />
		</Switch>
	);
};

export default RoutesView;
