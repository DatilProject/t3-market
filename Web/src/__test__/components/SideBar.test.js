import React from "react";
import { mount } from "enzyme";
import { render, screen } from "@testing-library/react";
import SideBar from "../../components/common/sidebar/SideBar";

describe("Test SideBar Component", () => {
	test("Render of the SideBar component", () => {
		const sidebar = mount(<SideBar />);
		expect(sidebar.length).toEqual(1);
	});

	test("Must display a Panel section", () => {
		render(<SideBar />);
		const linkElement = screen.getByText(/Panel/i);
		expect(linkElement).toBeInTheDocument;
	});

	test("Must display a Catalogue section", () => {
		render(<SideBar />);
		const linkElement = screen.getByText(/Catalogo/i);
		expect(linkElement).toBeInTheDocument;
	});

	test("Must display a Market section", () => {
		render(<SideBar />);
		const linkElement = screen.getByText(/Market/i);
		expect(linkElement).toBeInTheDocument;
	});

	test("Must display a logout section", () => {
		render(<SideBar />);
		const linkElement = screen.getByText(/Cerrar Sesión/i);
		expect(linkElement).toBeInTheDocument;
	});
});
