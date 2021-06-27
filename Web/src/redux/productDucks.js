import axios from "axios";

//constants
const data = {
  products: [],
};

const URL = "https://datil-market-api.herokuapp.com/api/product";
const GET_PRODUCTS = "GET_PRODUCTS";

//Reducer
export default function productReducer(state = data, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

//Actions
export const getProductsAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(URL);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
