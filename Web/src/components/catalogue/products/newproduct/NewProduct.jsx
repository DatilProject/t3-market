import React, { useState } from "react";
import eventsMultiSteps from "./NewProductosActions.js";
import "./NewProduct.css";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import { useDispatch } from "react-redux";
import { postProductsAction } from "../../../../redux/productDucks";

const NewProducto = () => {
	eventsMultiSteps();
	const dispatch = useDispatch();

	const [product, setProduct] = useState({
		name: "",
		description: "",
		category: "",
		weight: 0,
		unit: 0,
		mainCode: "",
		auxiliaryCode: "",
		onSale: false,
		price: 0,
		iva: 0,
		stock: 0,
		ice: 0,
		images: [],
	});

	function getJsonProduct(product) {
		const JsonProduct = {
			name: product.name,
			category: {
				name: product.category,
			},
			weight: product.weight,
			unit: product.unit,
			main_code: product.mainCode,
			auxiliary_code: product.auxiliaryCode,
			description: product.description,
			on_sale: product.onSale,
			price: product.price,
			stock: product.stock,
			marketId: 1,
			categoryId: 1,
			ivaId: 2,
			iceId: 1,
			iva: product.iva,
			ice: product.ice,
			images: [],
		};
		return JsonProduct;
	}

	const setValueInput = (event) => {
		setProduct({
			...product,
			[event.target.name]: event.target.value,
		});
	};

	const submitNewForm = () => {
		const newProduct = getJsonProduct(product);
		dispatch(postProductsAction(newProduct));
	};

	return (
		<div className="container-fluid" id="new-product">
			<div className="progressbar">
				<div className="col-12 col-md-12 p-0">
					<div id="container-progressbar">
						<ul id="progressbar" className="text-center pl-3">
							<li className="col active pl-lg-5 pr-lg-5" id="step-info-product"></li>
							<li className="col pl-lg-5 pr-lg-5" id="step-info-price"></li>
							<li className="col pl-lg-5 pr-lg-5" id="step-photos"></li>
							<li className="col pl-lg-5 pr-lg-5" id="finish"></li>
						</ul>
					</div>

					<div id="form-new-product">
						<Step1 setValueInput={setValueInput} />
						<Step2 setValueInput={setValueInput} />
						<Step3 setValueInput={setValueInput} submitNewForm={submitNewForm} />
						<Step4 />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewProducto;
