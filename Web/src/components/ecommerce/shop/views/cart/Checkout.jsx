import React, { Component } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./payment/CheckoutForm";
import './Checkout.css'

class CheckoutView extends Component {
	constructor(props) {
		super();
		this.state = {};

	}

	render() {
		const promise = loadStripe("pk_test_51JLrfnJ9ifkv8fqPKRQcI1CULUcVCBMeAWHcWe5AGsdbM2X3y5UI4ZK5tAahEtowdTwBYaulYPJKqE2tfIBDhSEu005emRRyVI");
		return (
			<React.Fragment>
				<div className="bg-secondary border-top p-4 text-white mb-3">
					<h1 className="display-6">Checkout</h1>
				</div>
				<div className="container mb-3">
				<div className="App">
					<Elements stripe={promise}>
						<CheckoutForm />
					</Elements>
				</div>

				</div>
			</React.Fragment>
		);
	}
}

export default CheckoutView;




