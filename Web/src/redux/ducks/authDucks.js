import { ENDPOINT_AUTH_COMMERCE } from "../endPoints";
import { setCokiesCommerce } from "../../components/utils/auth";
import { root } from "../../components/utils/constants";

const data = {
	auth: false,
	token: "",
	user: {},
};

const GET_AUTH_COMMERCE = "GET_AUTH_COMMERCE";

export default function authReducer(state = data, action) {
	switch (action.type) {
		case GET_AUTH_COMMERCE:
			var userLogIn = {
				auth: action.payload.auth,
				token: action.payload.token,
				user: action.payload.user,
			};
			if (userLogIn.auth) {
				setCokiesCommerce(userLogIn);
				window.location.href = root + "/panel";
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

export const getAuthCommerceAction = (authObject) => async (dispatch) => {
	const dataLogIn = {
		email: authObject.username,
		password: authObject.password,
	};

	// eslint-disable-next-line no-undef
	await fetch(ENDPOINT_AUTH_COMMERCE, {
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
				type: GET_AUTH_COMMERCE,
				payload: res,
			});
			// if (res.auth) {
			//   // navigation.navigate("Panel", { token: res.token, correo: email });
			//   console.log("1");
			// } else {
			//   console.log("2");

			//   // Alert.alert("Error de Inicio de Sesión", res.message);
			// }
		})
		.catch((err) => console.log("Error:", err));
};
