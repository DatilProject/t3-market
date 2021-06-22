import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import "./SideBar.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Panel from "../panel/Panel";
import Market from "../market/Market";
import Catalogue from "../catalogue/Catalogue";

const SideBar = () => {
  return (
    <Router>
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
              <SideNav.Nav defaultSelected="home">
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
              </SideNav.Nav>
            </SideNav>
            <main>
              <Route exact path="/">
                <Redirect to="/panel" />
              </Route>
              <Route path="/panel" component={(props) => <Panel />} />
              <Route path="/market" component={(props) => <Market />} />
              <Route path="/catalogue" component={(props) => <Catalogue />} />
            </main>
          </React.Fragment>
        )}
      />
    </Router>
  );
};

export default SideBar;
