import React from "react";
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { AiOutlineShopping } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./../css/Menu.css";

const Menu = () => {
  return (
    <SideNav
      id="sidenav"
      onSelect={(selectedKey) => {
        // Add your code here
        alert(`selected ${selectedKey}`);
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

        <NavItem eventKey="catalogo">
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
  );
};

export default Menu;
