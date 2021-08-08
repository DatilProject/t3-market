import React, { lazy, useState, useEffect } from "react";
import { data } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../../../../redux/ducks/productDucks";

const Paging = lazy(() => import("../../components/Paging"));
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const FilterCategory = lazy(() => import("../../components/filter/Category"));
const FilterPrice = lazy(() => import("../../components/filter/Price"));
const FilterSize = lazy(() => import("../../components/filter/Size"));
const FilterStar = lazy(() => import("../../components/filter/Star"));
const FilterColor = lazy(() => import("../../components/filter/Color"));
const FilterTag = lazy(() => import("../../components/filter/Tag"));
const FilterClear = lazy(() => import("../../components/filter/Clear"));
const CardServices = lazy(() => import("../../components/card/CardServices"));
const CardProductGrid = lazy(() => import("../../components/card/CardProductGrid"));
const CardProductList = lazy(() => import("../../components/card/CardProductList"));

const ProductListView = () => {
	const [state, setState] = useState({
		currentProducts: [],
		currentPage: null,
		totalPages: null,
		totalItems: 5,
		view: "list",
	});

	useEffect(() => {
		const totalItems = getProducts().length;
		setState({ ...state, totalItems });
	}, []);

	const onPageChanged = (page) => {
		let products = getProducts();
		const { currentPage, totalPages, pageLimit } = page;
		const offset = (currentPage - 1) * pageLimit;
		const currentProducts = products.slice(offset, offset + pageLimit);
		setState({ ...state, currentPage, currentProducts, totalPages });
	};

	const onChangeView = (view) => {
		setState({ ...state, view });
	};

	const getProducts = () => {
		let products = data.products;
		// TODO: Remove this
		products = products.concat(products);
		products = products.concat(products);
		products = products.concat(products);
		products = products.concat(products);
		products = products.concat(products);
		return products;
	};

	return (
		<React.Fragment>
			<div
				className="p-5 bg-primary bs-cover"
				style={{
					backgroundImage: "url(../../images/banner/50-Banner.webp)",
				}}
			>
				<div className="container text-center">
					<span className="display-5 px-3 bg-white rounded shadow">T-Shirts</span>
				</div>
			</div>
			<Breadcrumb />
			<div className="container-fluid mb-3">
				<div className="row">
					<div className="col-md-3">
						<FilterCategory />
						<FilterPrice />
						<FilterSize />
						<FilterStar />
						<FilterColor />
						<FilterClear />
						<FilterTag />
						<CardServices />
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-8">
								<span className="align-middle font-weight-bold">
									{state.totalItems} results for{" "}
									<span className="text-warning">{"'t-shirts'"}</span>
								</span>
							</div>
							<div className="col-md-4">
								<select
									className="form-select mw-180 float-left"
									aria-label="Default select"
								>
									<option value={1}>Most Popular</option>
									<option value={2}>Latest items</option>
									<option value={3}>Trending</option>
									<option value={4}>Price low to high</option>
									<option value={4}>Price high to low</option>
								</select>
								<div className="btn-group ml-3" role="group">
									<button
										aria-label="Grid"
										type="button"
										onClick={() => onChangeView("grid")}
										className={`btn ${
											state.view === "grid"
												? "btn-primary"
												: "btn-outline-primary"
										}`}
									>
										<FontAwesomeIcon icon={faTh} />
									</button>
									<button
										aria-label="List"
										type="button"
										onClick={() => onChangeView("list")}
										className={`btn ${
											state.view === "list"
												? "btn-primary"
												: "btn-outline-primary"
										}`}
									>
										<FontAwesomeIcon icon={faBars} />
									</button>
								</div>
							</div>
						</div>
						<hr />
						<div className="row g-3">
							{state.view === "grid" &&
								state.currentProducts.map((product, idx) => {
									return (
										<div key={idx} className="col-md-4">
											<CardProductGrid data={product} />
										</div>
									);
								})}
							{state.view === "list" &&
								state.currentProducts.map((product, idx) => {
									return (
										<div key={idx} className="col-md-12">
											<CardProductList data={product} />
										</div>
									);
								})}
						</div>
						<hr />
						<Paging
							totalRecords={state.totalItems}
							pageLimit={9}
							pageNeighbours={3}
							onPageChanged={onPageChanged}
							sizing=""
							alignment="justify-content-center"
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProductListView;
