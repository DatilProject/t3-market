import axios from "axios";
import { ENDPOINT_PRODUCT } from "./endPoints";

//constants
const data = {
  array: [],
};

const GET_PRODUCTS = "GET_PRODUCTS";

//Reducer
export default function productReducer(state = data, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, array: action.payload };
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
