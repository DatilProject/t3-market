import React from "react";
import OverOptions from "../OverOptions";

const Category = ({ category }) => {
	return (
		<tr>
			<td>{category.name}</td>
			<td>{category.product_count}</td>
			<td>{/* <OverOptions /> */}</td>
		</tr>
	);
};

export default Category;
