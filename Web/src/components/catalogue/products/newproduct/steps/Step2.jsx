import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ToggleButton from "../../../../common/toggle/ToggleButton";

const Step2 = ({ infoProduct, setValueInput }) => {
	const { price, iva, ice, on_sale, on_granel } = infoProduct;

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
								defaultValue={price !== 0 ? price : ""}
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
						<input
							type="text"
							name="iva"
							placeholder="IVA"
							onChange={setValueInput}
							defaultValue={iva.percentage ? iva.percentage : ""}
						/>
					</div>
					<div className="col-12 col-lg-5 ml-lg-4">
						<input
							type="text"
							name="ice"
							placeholder="ICE"
							onChange={setValueInput}
							defaultValue={ice.percentage ? ice.percentage : ""}
						/>
					</div>
				</div>

				<div className="from-row mx-md-n1 sell-on-granel">
					<div className="row ml-2">
						<ToggleButton
							active={on_granel}
							name="on_granel"
							onChange={setValueInput}
						/>
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
						<ToggleButton active={on_sale} name="on_sale" onChange={setValueInput} />
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
