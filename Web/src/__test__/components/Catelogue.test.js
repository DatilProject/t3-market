import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../__mocks__/ProviderMock";
import Catalogue from "../../components/catalogue/Catalogue";

describe("Test Login Page", () => {
	test("Render Login Page", () => {
		const login = shallow(
			<ProviderMock>
				<Catalogue />
			</ProviderMock>,
		);
		expect(login.length).toEqual(1);
	});
});
