import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import DellImg from "../../images/banner/Dell.webp";
import LaptopsImg from "../../images/banner/Laptops.webp";
const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

class SignUpView extends Component {
	onSubmit = async (values) => {
		alert(JSON.stringify(values));
	};
	render() {
		return (
			<div className="container my-3">
				<div className="row border">
					<div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
						<Link to="/">
							<img src={DellImg} alt="Dell img" className="img-fluid" />
						</Link>
						<Link to="/">
							<img src={LaptopsImg} alt="Laptops img" className="img-fluid" />
						</Link>
					</div>
					<div className="col-md-6 p-3">
						<h4 className="text-center">Sign Up</h4>
						<SingUpForm onSubmit={this.onSubmit} />
					</div>
				</div>
			</div>
		);
	}
}

export default SignUpView;
