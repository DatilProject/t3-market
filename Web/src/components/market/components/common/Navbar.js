import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import "../views/styles/PageView.css";
import "./Navbar.css";

const NavbarMain = () => {
   

    return (
        <Navbar>
        <Container>
        <Navbar.Brand ><h2 className="page-header">Datil Market</h2></Navbar.Brand>
        <Nav className="justify-content-end nav">
            <Nav.Item>
            <Nav.Link className="nav-link" href="/market">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="nav-link" href="/market/templates" eventKey="templates">Plantillas</Nav.Link>
        </Nav.Item>


        </Nav>
        </Container>

        </Navbar>

  );
};



export default NavbarMain;