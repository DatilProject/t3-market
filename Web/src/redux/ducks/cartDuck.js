import axios from "axios";
import { getValueFromCookieClient } from "../../components/utils/auth";
import { ENDPOINT_CLIENT_ORDER, ENDPOINT_ITEM_CART, ENDPOINT_UPDATE_ITEM_CART } from "../endPoints";

//constants
const data = {
	array: [],
};

const GET_CURRENT_ORDER = "GET_CURRENT_ORDER";
const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const UPDATE_PRODUCT_ORDER = "UPDATE_PRODUCT_ORDER";
const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";

export default function cartReducer(state = data, action) {
	switch (action.type) {
		case GET_CURRENT_ORDER:
			return { ...state, array: action.payload };
		case ADD_PRODUCT_TO_CART:
			return { ...state, array: action.payload };
		case UPDATE_PRODUCT_ORDER:
			window.location.reload();
			return state;
		case DELETE_PRODUCT_FROM_CART:
			return { ...state, array: action.payload };
		default:
			return state;
	}
}

//Actions
export const getProductsCartAction = () => async (dispatch) => {
	try {
		const idEcommerce = 1;
		const idClient = getValueFromCookieClient("id");
		await axios.post(ENDPOINT_CLIENT_ORDER + idEcommerce + "/" + idClient);
		const resProducts = await axios.get(ENDPOINT_CLIENT_ORDER + idEcommerce + "/" + idClient);
		dispatch({
			type: GET_CURRENT_ORDER,
			payload: resProducts.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const addItemToCartAction = (idOrder, idProduct) => async (dispatch) => {
	try {
		const data = {
			productId: idProduct,
			quantity: 1,
		};
		await axios.post(ENDPOINT_ITEM_CART + idOrder, data);
		const idEcommerce = 1;
		const idClient = getValueFromCookieClient("id");
		const res = await axios.get(ENDPOINT_CLIENT_ORDER + idEcommerce + "/" + idClient);
		dispatch({
			type: ADD_PRODUCT_TO_CART,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteItemFromCartAction = (idItem) => async (dispatch) => {
	try {
		await axios.delete(ENDPOINT_ITEM_CART + idItem);
		const idEcommerce = 1;
		const idClient = getValueFromCookieClient("id");
		const res = await axios.get(ENDPOINT_CLIENT_ORDER + idEcommerce + "/" + idClient);
		dispatch({
			type: DELETE_PRODUCT_FROM_CART,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const updateItemFromCartAction = (idItem, quantity) => async (dispatch) => {
	try {
		const data = { quantity };
		await axios.post(ENDPOINT_UPDATE_ITEM_CART + idItem, data);
		dispatch({
			type: UPDATE_PRODUCT_ORDER,
		});
	} catch (error) {
		console.log(error);
	}
};
