import React from "react";
import { Container } from "react-bootstrap";
import RoutesContainer from "./components/routes/RoutesContainer";

const Market = () => {
	return (
		<Container fluid className="section-container">
        <div className="app">
          <RoutesContainer/>
        </div>		
		</Container>
	);
};

export default Market;
