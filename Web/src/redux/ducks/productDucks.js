import axios from "axios";
import { ENDPOINT_PRODUCT } from "../endPoints";
import { getValueFromCookieCommerce } from "../../components/utils/auth";

//constants
const data = {
	array: [],
};
const GET_PRODUCTS = "GET_PRODUCTS";
const POST_PRODUCTS = "POST_PRODUCTS";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCTS = "DELETE_PRODUCTS";

//Reducer
export default function productReducer(state = data, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			return { ...state, array: action.payload };
		case POST_PRODUCTS:
			window.location.reload();
			return state;
		case UPDATE_PRODUCT:
			window.location.reload();
			return state;
		case DELETE_PRODUCTS:
			window.location.reload();
			return state;
		default:
			return state;
	}
}

//Actions
export const getProductsAction = () => async (dispatch) => {
	try {
		const idCommerce = getValueFromCookieCommerce("id");
		const res = await axios.get(ENDPOINT_PRODUCT + "commerce/" + idCommerce);
		dispatch({
			type: GET_PRODUCTS,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

export const postProductsAction = (product) => async (dispatch) => {
	try {
		const imgToBase64 = await getBase64(product.images);
		const infoProduct = { ...product, images: imgToBase64 };
		const res = await axios.post(ENDPOINT_PRODUCT, infoProduct);

		dispatch({
			type: POST_PRODUCTS,
		});
	} catch (error) {
		console.log(error);
	}
};

export const updateProductAction = (product) => async (dispatch) => {
	try {
		// let infoProduct = { ...product };

		// if (typeof product.images !== "object") {
		const imgToBase64 = await getBase64(product.images);
		const infoProduct = { ...product, images: imgToBase64 };
		// }
		const idProduct = infoProduct.id;
		const res = await axios.post(ENDPOINT_PRODUCT + "/update/" + idProduct, infoProduct);

		dispatch({
			type: UPDATE_PRODUCT,
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteProductsAction = (IdProduct) => async (dispatch) => {
	try {
		const res = await axios.delete(ENDPOINT_PRODUCT + IdProduct);
		dispatch({
			type: DELETE_PRODUCTS,
		});
	} catch (error) {
		console.log(error);
	}
};
