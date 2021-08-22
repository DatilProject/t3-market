import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../__mocks__/ProviderMock";
import Market from "../../components/market/Market";

describe("Test Login Page", () => {
	test("Render Login Page", () => {
		const login = shallow(
			<ProviderMock>
				<Market />
			</ProviderMock>,
		);
		expect(login.length).toEqual(1);
	});
});
