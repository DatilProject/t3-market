import axios from "axios";
import { ENDPOINT_CLIENT_ORDER } from "../endPoints";

//constants
const data = {
	array: [],
};

const GET_ORDERS = "GET_ORDERS";
const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const UPDATE_ORDER = "UPDATE_ORDER";
const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";

export default function categoryReducer(state = data, action) {
	switch (action.type) {
		case GET_ORDERS:
			return { ...state, array: action.payload };
		case ADD_PRODUCT_TO_CART:
			return state;
		case UPDATE_ORDER:
			return state;
		case DELETE_PRODUCT_FROM_CART:
			window.location.reload();
			return state;
		default:
			return state;
	}
}

//Actions
export const getCategoryAction = () => async (dispatch) => {
	try {
		const idEcommerce = 1;
		const idClient = 2;
		const res = await axios.get(ENDPOINT_CLIENT_ORDER + idEcommerce + "/" + idClient);
		dispatch({
			type: GET_ORDERS,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const postCategoryAction = (category) => async (dispatch) => {
	try {
		const res = await axios.post(ENDPOINT_CLIENT_ORDER, category);
		dispatch({
			type: ADD_PRODUCT_TO_CART,
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteCategoryAction = (IdCategory) => async (dispatch) => {
	try {
		const res = await axios.delete(ENDPOINT_CLIENT_ORDER + IdCategory);
		dispatch({
			type: DELETE_PRODUCT_FROM_CART,
		});
	} catch (error) {
		console.log(error);
	}
};
