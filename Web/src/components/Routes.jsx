import React from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import Login from "./login/LogIn";
import SideBar from "./common/sidebar/SideBar";

const Routes = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={(props) => <Login />} />
				<Route path="/" component={(props) => <SideBar />} />
			</Switch>
		</HashRouter>
	);
};

export default Routes;
