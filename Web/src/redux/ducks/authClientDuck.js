import { ENDPOINT_AUTH_CLIENT } from "../endPoints";
import { setCokiesClient } from "../../components/utils/auth";
import { root, rootCommerce } from "../../components/utils/constants";

const data = {
	auth: false,
	token: "",
	user: {},
};

const GET_AUTH_CLIENT = "GET_AUTH_CLIENT";

export default function authClientReducer(state = data, action) {
	switch (action.type) {
		case GET_AUTH_CLIENT:
			var userLogIn = {
				auth: action.payload.auth,
				token: action.payload.token,
				user: action.payload.user,
			};
			if (userLogIn.auth) {
				setCokiesClient(userLogIn);
				window.location.href = root + rootCommerce;
				window.location.reload();
			} else {
				alert("Usuario o Contaseña Incorrectos");
			}
			return {
				...state,
				auth: action.payload.auth,
				token: action.payload.token,
				user: action.payload.user,
			};
		default:
			return state;
	}
}

export const getAuthClientAction = (authObject) => async (dispatch) => {
	const dataLogIn = {
		email: authObject.username,
		password: authObject.password,
	};

	// eslint-disable-next-line no-undef
	await fetch(ENDPOINT_AUTH_CLIENT, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(dataLogIn),
	})
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			dispatch({
				type: GET_AUTH_CLIENT,
				payload: res,
			});
		})
		.catch((err) => console.log("Error:", err));
};
