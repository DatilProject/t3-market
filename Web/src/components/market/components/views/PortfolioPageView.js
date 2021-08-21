import React from "react";
import { Container, Row } from "react-bootstrap";
import "./styles/PageView.css";
import { Link } from "react-router-dom";
import { rootCommerce } from "../../../utils/constants";

const PortfolioPageView = () => {
	return (
		<>
			<Container fluid className="section-container">
				<Container fluid className="head-container">
					<div className="p-4 mb-5">
						<h1>Plantillas</h1>
						<p className="lead">Elige una plantilla para tu página web</p>
					</div>
				</Container>
				<Container className="p-6 mb-5">
					<div className="row mx-5 popup">
						<div className="col">
							<div className="card">
								<Link to={rootCommerce} target="_blank">
									<img
										className="card-img-top "
										alt="card-img-top"
										src="https://i.imgur.com/r5Etjcw.png"
									/>
								</Link>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<Link to={rootCommerce} target="_blank">
									<img
										className="card-img-top"
										alt="card-img-top"
										src="https://i.imgur.com/r5Etjcw.png"
									/>
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</Container>
			<div className="p-5"></div>
		</>
	);
};

export default PortfolioPageView;
