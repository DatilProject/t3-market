import React from "react";
import { Button } from "react-bootstrap";

const Step3 = (props) => {
	// const setValueInput = props.setValueInput;

	return (
		<fieldset>
			<div className="form-card">
				<div className="form-group">
					<h2 className="fs-title mb-3">Fotos</h2>
					<input
						type="file"
						className="form-control-file"
						id="exampleFormControlFile1"
					></input>
				</div>
			</div>
			<Button variant="secondary" className="previous">
				Atrás
			</Button>
			<Button variant="primary" onClick={props.submitNewForm} className="next">
				Siguiente
			</Button>
		</fieldset>
	);
};

export default Step3;
