import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ToggleButton from "../../../../common/toggle/ToggleButton";

const Step2 = (props) => {
	const setValueInput = props.setValueInput;
	const [onMarket, setOnMarket] = useState(false);

	return (
		<fieldset>
			<div className="form-card">
				<h2 className="fs-title mb-3">Datos de Venta</h2>
				<div className="from-row mx-md-n1">
					<label className="col-6 d-none d-xl-inline-block mb-0">Precio</label>
					<label className="col-5 ml-4 d-none d-xl-inline-block mb-0">
						Precio sin Subsidio
					</label>
				</div>
				<div className="form-row">
					<div className="col-12 col-lg-6">
						<div className="container p-0">
							<input
								className="m-0"
								type="text"
								name="price"
								onChange={setValueInput}
								placeholder="Precio $ 0.00"
							/>
							<p className="ml-2">Valor sin impuestos</p>
						</div>
					</div>
					<div className="col-12 col-lg-5 ml-lg-4">
						<div className="container p-0">
							<input
								className="m-0"
								type="text"
								name="uname"
								placeholder="Precio sin Sudsidios $ 0.00"
							/>
							<p className="ml-2">Valor sin impuestos</p>
						</div>
					</div>
				</div>

				<div className="from-row mx-md-n1">
					<label className="col-6 d-none d-xl-inline-block mb-0">IVA</label>
					<label className="col-5 ml-4 d-none d-xl-inline-block mb-0">ICE</label>
				</div>
				<div className="form-row">
					<div className="col-12 col-lg-6">
						<input type="text" name="iva" placeholder="IVA" onChange={setValueInput} />
					</div>
					<div className="col-12 col-lg-5 ml-lg-4">
						<input type="text" name="ice" placeholder="ICE" onChange={setValueInput} />
					</div>
				</div>

				<div className="from-row mx-md-n1 sell-on-granel">
					<div className="row ml-2">
						<ToggleButton active={onMarket} name="onSale" onChange={setValueInput} />
						<div className="col-auto font-weight-bold d-xl-inline-block mb-0 my-auto">
							Venta Granel
						</div>
						<p className="font-weight-light my-auto">
							(Marca esta opción para habilitar este producto para venta al granel)
						</p>
					</div>
				</div>

				<div className="from-row mx-md-n1 sell-on-market">
					<div className="row ml-2">
						<ToggleButton active={false} />
						<div className="col-auto font-weight-bold d-xl-inline-block mb-0 my-auto">
							Market
						</div>
						<p className="font-weight-light my-auto">
							(Marca esta opción para publicar este producto para en tu{" "}
							<strong>tienda en línea</strong>)
						</p>
					</div>
				</div>

				<div className="from-row mx-md-n1 mt-3">
					<label className="col-6 d-none d-xl-inline-block mb-0">Costo Unitario</label>
				</div>
				<div className="form-row">
					<div className="col-12 col-lg-6">
						<div className="container p-0">
							<input
								className="m-0"
								type="text"
								name="uname"
								placeholder="Costo Unitario $ 0.00"
							/>
							<p className="ml-2">Valor sin impuestos</p>
						</div>
					</div>
				</div>
			</div>

			<Button variant="secondary" className="previous">
				Atrás
			</Button>
			<Button variant="primary" className="next">
				Siguiente
			</Button>
		</fieldset>
	);
};

export default Step2;
