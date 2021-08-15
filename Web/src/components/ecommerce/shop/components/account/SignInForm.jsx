import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import { required, maxLength20, minLength8 } from "../../helpers/validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as IconPhoneFill } from "bootstrap-icons/icons/phone-fill.svg";
import { ReactComponent as IconShieldLockFill } from "bootstrap-icons/icons/shield-lock-fill.svg";
import { Container, Row, Col, Figure, Button } from "react-bootstrap";

const SignInForm = (props) => {
	const { submitting, LogInClient, submitFailed, handleOnChange } = props;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<form
			onSubmit={handleSubmit(LogInClient)}
			className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
			noValidate
		>
			<div className="form-group">
				<label className="font-weight-bold">Usuario</label>
				<input
					type="text"
					className="form-control"
					name="username"
					{...register("username", {
						required: {
							value: true,
							message: "Usuario requerido",
						},
					})}
				/>
				<span className="text-danger text-small d-block mb-2 fw-bold  ">
					{errors?.username?.message}
				</span>
			</div>
			<div className="form-group">
				<label className="font-weight-bold">Contraseña</label>
				<input
					type="password"
					name="password"
					className="form-control"
					{...register("password", {
						required: {
							value: true,
							message: "Contraseña requerida",
						},
					})}
				/>
				<span className="text-danger text-small d-block mb-2 fw-bold  ">
					{errors?.password?.message}
				</span>
			</div>

			<button type="submit" className="btn btn-primary btn-block mb-3" disabled={submitting}>
				Entrar
			</button>
			<Link className="float-left" to="/account/signup" title="Sign Up">
				Crea tu cuenta
			</Link>
			<Link className="float-right" to="/account/forgotpassword" title="Forgot Password">
				Olvidate la contraseña?
			</Link>
			<div className="clearfix"></div>
			<hr></hr>
			{/* <div className="row">
				<div className="col- text-center">
					<p className="text-muted small">Or you can join with</p>
				</div>
				<div className="col- text-center">
					<Link to="/" className="btn text-white bg-twitter mr-3">
						<FontAwesomeIcon icon={faTwitter} />
					</Link>
					<Link to="/" className="btn text-white mr-3 bg-facebook">
						<FontAwesomeIcon icon={faFacebookF} className="mx-1" />
					</Link>
					<Link to="/" className="btn text-white mr-3 bg-google">
						<FontAwesomeIcon icon={faGoogle} className="mx-1" />
					</Link>
				</div>
			</div> */}
		</form>
	);
};

export default compose(
	reduxForm({
		form: "signin",
	}),
)(SignInForm);
