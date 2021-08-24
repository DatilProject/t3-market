import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import axios from "axios";

const CheckoutForm = ({ productsCart }) => {
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState("");
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState("");
	const stripe = useStripe();
	const elements = useElements();
	const [currentOrdenID, setCurrentOrdenID] = useState(-1);

	useEffect(() => {
		if (productsCart[0]) {
			setCurrentOrdenID(productsCart[0].id);
		}

		// Create PaymentIntent as soon as the page loads
		window
			.fetch("https://206.81.3.107/api/order/create-payment-intent", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ items: [{ orderId: "6" }] }),
			})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setClientSecret(data.clientSecret);
			});
	}, [productsCart]);

	const cardStyle = {
		style: {
			base: {
				color: "#32325d",
				fontFamily: "Arial, sans-serif",
				fontSmoothing: "antialiased",
				fontSize: "16px",
			},
			invalid: {
				color: "#fa755a",
				iconColor: "#fa755a",
			},
		},
	};

	const handleSubmit = async (ev) => {
		ev.preventDefault();
		setProcessing(true);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement),
		});
		if (!error) {
			try {
				const { data } = await axios.post(
					"https://206.81.3.107/api/order/create-payment-intent",
					{ orderId: currentOrdenID },
				);
				setClientSecret(data.clientSecret);
				const payload = await stripe.confirmCardPayment(data.clientSecret, {
					payment_method: {
						card: elements.getElement(CardElement),
					},
				});
				if (payload.error) {
					setError(`No se pudo realizar el pago`);
					setProcessing(false);
				} else {
					setError(null);
					setProcessing(false);
					setSucceeded(true);
				}
			} catch {
				setError("No se pudo realizar el pago");
				setProcessing(false);
			}
		}
	};
	return (
		<div className="root">
			<form id="payment-form" onSubmit={handleSubmit}>
				<CardElement id="payment-card-element" options={cardStyle} />
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
