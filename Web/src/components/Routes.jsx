import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/LogIn";
import SideBar from "./common/sidebar/SideBar";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={(props) => <Login />} />
				<Route exact path="/panel" component={(props) => <SideBar />} />
				<Route exact path="/market" component={(props) => <SideBar />} />
				<Route exact path="/catalogue" component={(props) => <SideBar />} />
			</Switch>
		</Router>
	);
};

export default Routes;
