import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideNav, { Toggle, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { AiOutlineShopping } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { IoSpeedometerOutline, IoLogOut } from "react-icons/io5";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./SideBar.css";
import Panel from "../../panel/Panel";
import Market from "../../market/Market";
import Catalogue from "../../catalogue/Catalogue";
import { logOut, isLogIn } from "../../utils/auth";

const SideBar = () => {
	if (!isLogIn()) {
		window.location.href = "./";
	}

	return (
		// <Router>
		<Route
			render={({ location, history }) => (
				<React.Fragment>
					<SideNav
						id="sidenav"
						onSelect={(selected) => {
							const to = "/" + selected;
							if (location.pathname !== to) {
								history.push(to);
							}
						}}
					>
						<Toggle />
						<SideNav.Nav defaultSelected="panel">
							<NavItem eventKey="panel">
								<NavIcon>
									<IoSpeedometerOutline className="menu-icon" size="1.7rem" />
								</NavIcon>
								<NavText>Panel</NavText>
							</NavItem>

							<NavItem eventKey="catalogue">
								<NavIcon>
									<BsBook className="menu-icon" size="1.7rem" />
								</NavIcon>
								<NavText>Catalogo</NavText>
							</NavItem>

							<NavItem eventKey="market">
								<NavIcon>
									<AiOutlineShopping className="menu-icon" size="2rem" />
								</NavIcon>
								<NavText>Market</NavText>
							</NavItem>

							<NavItem eventKey="logout" onClick={() => logOut()}>
								<NavIcon>
									<IoLogOut className="menu-icon" size="2rem" />
								</NavIcon>
								<NavText>Cerrar Sesión</NavText>
							</NavItem>
						</SideNav.Nav>
					</SideNav>
					<main>
						<Switch>
							<Route path="/panel" component={(props) => <Panel />} />
							<Route path="/market" component={(props) => <Market />} />
							<Route path="/catalogue" component={(props) => <Catalogue />} />
						</Switch>
					</main>
				</React.Fragment>
			)}
		/>
		// </Router>
	);
};

export default SideBar;
