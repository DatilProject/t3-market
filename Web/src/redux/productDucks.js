import axios from "axios";
import { ENDPOINT_PRODUCT } from "./endPoints";

//constants
const data = {
	array: [],
};

const GET_PRODUCTS = "GET_PRODUCTS";
const POST_PRODUCTS = "POST_PRODUCTS";

//Reducer
export default function productReducer(state = data, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			return { ...state, array: action.payload };
		case POST_PRODUCTS:
			return;
		default:
			return state;
	}
}

//Actions
export const getProductsAction = () => async (dispatch) => {
	try {
		const res = await axios.get(ENDPOINT_PRODUCT);
		dispatch({
			type: GET_PRODUCTS,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const postProductsAction = (product) => async (dispatch) => {
	try {
		console.log(product);
		const res = await axios.post(ENDPOINT_PRODUCT, product);
		dispatch({
			type: POST_PRODUCTS,
		});
	} catch (error) {
		console.log(error);
	}
};
