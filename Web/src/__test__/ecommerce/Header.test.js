import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../__mocks__/ProviderMock";
import Header from "../../components/ecommerce/shop/components/Header";

describe("Header Component => Ecommerce", () => {
	test("Render header component", () => {
		const header = shallow(
			<ProviderMock>
				<Header />
			</ProviderMock>,
		);
		expect(header.length).toEqual(1);
	});

	test("Render cart button", () => {
		const header = mount(
			<ProviderMock>
				<Header />
			</ProviderMock>,
		);
		expect(header.find(".cart-btn").text()).toEqual("0");
	});
});
