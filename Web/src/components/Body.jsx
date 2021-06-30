import React from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import Login from "./login/LogIn";
import SideBar from "./common/sidebar/SideBar";

const Body = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
				<Route path="/">
					<SideBar />
				</Route>
			</Switch>
		</HashRouter>
	);
};

export default Body;
