import React from "react";
import "./styles/PageView.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";
import NavbarMain from "../common/Navbar";

const PortfolioPageView = () => {
	return (
		<>
			<div>
				<ParticlesBg num={200} type="circle" bg={true} />
				<div className="mx-4">
					<NavbarMain />
				</div>
				<div className="page">
					<div className="overview mx-5">
						<h1>Plantillas</h1>
						<p className="lead">Escoge una plantilla</p>
					</div>

					<div className="row mx-5 popup">
						<div className="col">
							<div className="card">
								<Link to="/myPortfolio">
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
								<Link to="/myPortfolio">
									<img
										className="card-img-top"
										alt="card-img-top"
										src="https://i.imgur.com/r5Etjcw.png"
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PortfolioPageView;
