import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../___mocks__/ProviderMock";
import LogIn from "../../components/login/LogIn";

describe("Test Login Page", () => {
	test("Render Login Page", () => {
		const login = shallow(
			<ProviderMock>
				<LogIn />
			</ProviderMock>,
		);
		expect(login.length).toEqual(1);
	});
});
