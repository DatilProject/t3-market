import cartReducer from "../../redux/ducks/cartDuck";
import Product from "../__mocks__/ProductMock";

describe("Reducer add to cart", () => {
	test("Return initial state", () => {
		expect(cartReducer({}, "")).toEqual({});
	});

	test("ADD_PRODUCT_TO_CART", () => {
		const initialState = { array: [] };
		const payload = [Product];
		const action = {
			type: "ADD_PRODUCT_TO_CART",
			payload,
		};
		const expected = { array: [Product] };
		expect(cartReducer(initialState, action)).toEqual(expected);
	});
});
