import React from "react";
import toHaveBeenCalledWith from "@testing-library/jest-dom";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import LogIn from "./LogIn";

test("Test to load a lazy cart component", () => {
	jest.spyOn(window.location, "assign").mockImplementation((l) => {
		expect(l).toEqual("/checkout");
	});
	render(<LogIn />);
	const elem = getByTestId("checkOut");
	fireEvent.onClick(elem);
	expect(window.location.assign).lastCalledWith("/checkout");
});
