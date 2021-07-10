import React, { useState, useCallback, useEffect } from "react";
import eventsMultiSteps from "./NewProductosActions.js";
import "./NewProduct.css";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import { useDispatch, useSelector } from "react-redux";
import { postProductsAction } from "../../../../redux/ducks/productDucks";
import { getValueFromCookie } from "../../../utils/auth.js";
import { getIdCategory } from "../../../utils/utils.js";
import { getCategoryAction } from "../../../../redux/ducks/categoryDucks";

const NewProducto = () => {
	eventsMultiSteps();
	const idUser = getValueFromCookie("id");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategoryAction());
	}, []);

	const listCategories = useSelector((store) => store.categories.array);

	const [product, setProduct] = useState({
		name: "",
		description: "",
		category: "",
		weight: 0,
		unit: 0,
		main_code: "",
		auxiliary_code: "",
		on_granel: false,
		on_sale: false,
		price: 0,
		iva: 0,
		stock: 0,
		ice: 0,
		images: [],
		marketId: idUser,
		categoryId: 1,
		ivaId: 2,
		iceId: 1,
	});

	const setValueInput = useCallback((event) => {
		setProduct({
			...product,
			[event.target.name]: event.target.value,
		});
		if (event.target.name === "category") {
			setProduct({
				...product,
				categoryId: getIdCategory(event.target.value, listCategories),
			});
		}
		//check if we can improve this
		if (event.target.name === "on_granel" || event.target.name === "on_sale") {
			setProduct({
				...product,
				[event.target.name]: event.target.value === "false",
			});
		}
	}, []);

	const submitNewProduct = () => {
		dispatch(postProductsAction(product));
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
						<Step3 setValueInput={setValueInput} submitNewProduct={submitNewProduct} />
						<Step4 />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewProducto;
