import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { connect } from "react-redux";

const CheckoutForm = ({ productsCart }) => {
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState("");
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState("");
	const stripe = useStripe();
	const elements = useElements();
	const [currentOrdenID, setCurrentOrdenID] = useState(-1);
	console.log("currentOrdenID");
	console.log(currentOrdenID);

	useEffect(() => {
		if (productsCart[0]) {
			setCurrentOrdenID(productsCart[0].id);
		}

		// Create PaymentIntent as soon as the page loads
		window
			.fetch("http/206.81.3.107:3000/api/order/create-payment-intent", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ items: [{ orderId: "2" }] }),
			})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setClientSecret(data.clientSecret);
			});
	}, []);

	const cardStyle = {
		style: {
			base: {
				color: "#32325d",
				fontFamily: "Arial, sans-serif",
				fontSmoothing: "antialiased",
				fontSize: "16px",
				"::placeholder": {
					color: "#32325d",
				},
			},
			invalid: {
				color: "#fa755a",
				iconColor: "#fa755a",
			},
		},
	};

	const handleChange = async (event) => {
		// Listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};
	const handleSubmit = async (ev) => {
		ev.preventDefault();
		setProcessing(true);
		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			},
		});
		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setError(null);
			setProcessing(false);
			setSucceeded(true);
		}
	};
	return (
		<div className="root">
			<form id="payment-form" onSubmit={handleSubmit}>
				<CardElement
					id="payment-card-element"
					options={cardStyle}
					onChange={handleChange}
				/>
				<button disabled={processing || disabled || succeeded} id="payment-submit">
					<span id="button-text">
						{processing ? <div className="spinner" id="spinner"></div> : "Pagar"}
					</span>
				</button>
				{/* Show any error that happens when processing the payment */}
				{error && (
					<div className="card-error" role="alert">
						{error}
					</div>
				)}
				{/* Show a success message upon completion */}
				<p className={succeeded ? "result-message" : "result-message hidden"}>
					Se realizó el pago
				</p>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		productsCart: state.cart.array,
	};
};

export default connect(mapStateToProps, null)(CheckoutForm);
