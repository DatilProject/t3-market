import React, { useState } from "react";
import { Container, Row, Col, Fade } from "react-bootstrap";
import ProductSection from "./products/ProductSection";
import CategorySection from "./categories/CategorySection";
import "./Catalogue.css";

const Catalogue = () => {
	const [isOnProductSection, setisOnProductSection] = useState(true);
	const isActivate = (isActive) =>
		"my-auto text-center p-3 " + (isActive ? "section-active" : "text-secondary");

	return (
		<Container fluid className="section-container">
			<Container fluid className="mb-5 head-container shadow-sm">
				<Row noGutters>
					<Col md="2" sm="12" className="p-3">
						<h5 className="m-auto text-secondary">Catalógo</h5>
					</Col>
					<Col md="5" sm="12" className="tab">
						<h5
							onClick={() => setisOnProductSection(true)}
							className={isActivate(isOnProductSection)}
						>
							Productos
						</h5>
					</Col>
					<Col md="5" sm="12" className="tab">
						<h5
							onClick={() => setisOnProductSection(false)}
							className={isActivate(!isOnProductSection)}
						>
							Categorías
						</h5>
					</Col>
				</Row>
			</Container>

			<Container>
				<Fade in>{isOnProductSection ? <ProductSection /> : <CategorySection />}</Fade>
			</Container>
		</Container>
	);
};

export default Catalogue;
