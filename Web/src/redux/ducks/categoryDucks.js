import axios from "axios";
import { ENDPOINT_CATEGORY } from "../endPoints";
import { getValueFromCookieCommerce } from "../../components/utils/auth";

//constants
const data = {
	array: [],
};

const GET_CATEGORIES = "GET_CATEGORIES";
const POST_CATEGORY = "POST_CATEGORY";
const UPDATE_CATEGORY = "UPDATE_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";

//Reducer
export default function categoryReducer(state = data, action) {
	switch (action.type) {
		case GET_CATEGORIES:
			return { ...state, array: action.payload };
		case POST_CATEGORY:
			return { ...state, array: action.payload };
		case UPDATE_CATEGORY:
			return state;
		case DELETE_CATEGORY:
			window.location.reload();
			return state;
		default:
			return state;
	}
}

//Actions
export const getCategoryAction = () => async (dispatch) => {
	try {
		const idCommerce = getValueFromCookieCommerce("id");
		const res = await axios.get(ENDPOINT_CATEGORY + "commerce/" + idCommerce);
		dispatch({
			type: GET_CATEGORIES,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const postCategoryAction = (category) => async (dispatch) => {
	try {
		const idCommerce = getValueFromCookieCommerce("id");
		const infoCategory = {
			...category,
			marketId: idCommerce,
		};
		await axios.post(ENDPOINT_CATEGORY, infoCategory);
		const res = await axios.get(ENDPOINT_CATEGORY + "commerce/" + idCommerce);

		dispatch({
			type: POST_CATEGORY,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteCategoryAction = (IdCategory) => async (dispatch) => {
	try {
		const res = await axios.delete(ENDPOINT_CATEGORY + IdCategory);
		dispatch({
			type: DELETE_CATEGORY,
		});
	} catch (error) {
		console.log(error);
	}
};
