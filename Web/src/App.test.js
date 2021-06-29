import React from "react";
import { render, screen } from "@testing-library/react";
import SideBar from "./components/common/sidebar/SideBar";

describe("SideBar Page Sections", () => {
	it("Must display a Panel section", () => {
		render(<SideBar />);
		const linkElement = screen.getByText(/Panel/i);
		expect(linkElement).toBeInTheDocument;
	});

	it("Must display a Catalogue section", () => {
		render(<SideBar />);
		const linkElement = screen.getByText(/Catalogo/i);
		expect(linkElement).toBeInTheDocument;
	});

	it("Must display a Market section", () => {
		render(<SideBar />);
		const linkElement = screen.getByText(/Market/i);
		expect(linkElement).toBeInTheDocument;
	});

	it("Must display a logout section", () => {
		render(<SideBar />);
		const linkElement = screen.getByText(/Cerrar Sesión/i);
		expect(linkElement).toBeInTheDocument;
	});
});
