import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../__mocks__/ProviderMock";
import Product from "../__mocks__/ProductMock";
import CardProductList from "../../components/ecommerce/shop/components/card/CardProductList";

describe("Product component => Ecommerce", () => {
	test("Render product component", () => {
		const cardProduct = shallow(
			<ProviderMock>
				<CardProductList />
			</ProviderMock>,
		);
		expect(cardProduct.length).toEqual(1);
	});

	test("Check action add to cart", () => {
		const handleAddToCart = jest.fn();
		const cardProduct = mount(
			<ProviderMock>
				<CardProductList handleAddItemToCart={handleAddToCart} data={Product} />
			</ProviderMock>,
		);
		cardProduct.find(".add-to-cart-btn").simulate("click");
		expect(handleAddToCart).toHaveBeenCalledTimes(1);
	});
});
