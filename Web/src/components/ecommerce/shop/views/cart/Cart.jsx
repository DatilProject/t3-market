import React, { useState, lazy, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { connect } from "react-redux";
import Payments from "../../images/payment/payments.webp";
import ItemCart from "./ItemCart";
import { getTotalValueAndDiscount } from "../../../../utils/computeTotalCart";
const CouponApplyForm = lazy(() => import("../../components/others/CouponApplyForm"));

const CartView = ({ productsCart }) => {
	const [totalValue, setTotalValue] = useState(0);
	const [totalDiscount, setTotalDiscount] = useState(0);
	const [currentOrdenID, setCurrentOrdenID] = useState(-1);

	useEffect(() => {
		if (productsCart[0]) {
			const totalValueAndDiscount = getTotalValueAndDiscount(productsCart[0].items);
			setTotalValue(totalValueAndDiscount[0]);
			setTotalDiscount(totalValueAndDiscount[1]);
			setCurrentOrdenID(productsCart[0].id);
		}
	}, [productsCart]);

	return (
		<React.Fragment>
			<div className="bg-secondary border-top p-4 text-white mb-3">
				<h1 className="display-6">Carrito de compras</h1>
			</div>
			<div className="container mb-3">
				<div className="row">
					<div className="col-md-9">
						<div className="card">
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead className="text-muted">
										<tr className="small text-uppercase">
											<th scope="col">Producto</th>
											<th scope="col" width={120}>
												Cantidad
											</th>
											<th scope="col" width={150}>
												Precio
											</th>
											<th scope="col" className="text-right" width={130}></th>
										</tr>
									</thead>
									<tbody>
										{productsCart[0]
											? productsCart[0].items.map((item) => (
													<ItemCart
														key={item.id}
														item={item}
														currentOrdenID={currentOrdenID}
													/>
											  ))
											: null}
									</tbody>
								</table>
							</div>

							<div className="card-footer">
								<Link to="/checkout" className="btn btn-primary float-right">
									Efectuar Compra <IconChevronRight className="i-va" />
								</Link>
								<Link to="/" className="btn btn-secondary">
									<IconChevronLeft className="i-va" /> Continuar comprando
								</Link>
							</div>
						</div>
						{/* <div className="alert alert-success mt-3">
							<p className="m-0">
								<IconTruck className="i-va mr-2" /> Free Delivery within 1-2 weeks
							</p>
						</div> */}
					</div>
					<div className="col-md-3">
						{/* <div className="card mb-3">
						<div className="card-body">
							<CouponApplyForm onSubmit={this.onSubmitApplyCouponCode} />
						</div>
					</div> */}
						<div className="card">
							<div className="card-body">
								<dl className="row border-bottom">
									<dt className="col-6">Total:</dt>
									<dd className="col-6 text-right">${totalValue.toFixed(2)}</dd>

									<dt className="col-6 text-success">Discount:</dt>
									<dd className="col-6 text-success text-right">
										-${totalDiscount.toFixed(2)}
									</dd>
									{/* <dt className="col-6 text-success">
										Coupon:{" "}
										<span className="small text-muted">EXAMPLECODE</span>{" "}
									</dt>
									<dd className="col-6 text-success text-right">-$68</dd> */}
								</dl>
								<dl className="row">
									<dt className="col-6">Total:</dt>
									<dd className="col-6 text-right  h5">
										<strong>${(totalValue - totalDiscount).toFixed(2)}</strong>
									</dd>
								</dl>
								<hr />
								<p className="text-center">
									<img src={Payments} alt="Payments" height={26} />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="bg-light border-top p-4">
			<div className="container">
				<h6>Payment and refund policy</h6>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum.
				</p>
			</div>
		</div> */}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		productsCart: state.cart.array,
	};
};

export default connect(mapStateToProps, null)(CartView);
