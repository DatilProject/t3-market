import React, { lazy, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DellImg from "../../images/banner/Dell.webp";
import LaptopsImg from "../../images/banner/Laptops.webp";
import { getAuthClientAction } from "../../../../../redux/ducks/authClientDuck";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

const SignInView = () => {
	const [client, setClient] = useState({ username: "", password: "" });
	const dispatch = useDispatch();
	const clientLogIn = useSelector((store) => store.auth);

	const handleOnChange = (event) => {
		setClient({
			...client,
			[event.target.name]: event.target.value,
		});
	};

	const handleLoginClient = async (values) => {
		dispatch(getAuthClientAction(values));
	};

	return (
		<div className="container my-3">
			<div className="row border">
				<div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
					<Link to="/">
						<img src={DellImg} alt="Dell Img" className="img-fluid" />
					</Link>
					<Link to="/">
						<img src={LaptopsImg} alt="Laptops Img" className="img-fluid" />
					</Link>
				</div>
				<div className="col-md-6 p-3">
					<h4 className="text-center">Iniciar Sesion</h4>
					<SignInForm LogInClient={handleLoginClient} handleOnChange={handleOnChange} />
				</div>
			</div>
		</div>
	);
};

export default SignInView;
