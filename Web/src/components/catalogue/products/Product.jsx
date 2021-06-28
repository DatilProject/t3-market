import React from "react";
import { Figure } from "react-bootstrap";
import ToggleButton from "../../common/toggle/ToggleButton";
import OverOptions from "../OverOptions";
import "./Product.css";

const Product = ({ product }) => {
	const priceWithIVA = product.price * product.iva;

	return (
		<tr className="row-product">
			<td className="text-center">
				<Figure className="my-auto">
					<Figure.Image
						className="my-auto product-image"
						width={171}
						height={180}
						alt="Producto"
						src={product.images[0]}
					/>
				</Figure>
			</td>
			<td>{product.name}</td>
			<td>
				<div>
					<div className="m-0 p-0">{product.mainCode}</div>
				</div>
			</td>
			<td>{product.category}</td>
			<td>{"$" + product.price}</td>
			<td>{"$" + priceWithIVA}</td>
			<td>{product.stock}</td>
			<td>
				<ToggleButton active={product.onSale} />
			</td>
			<td>
				<OverOptions />
			</td>
		</tr>
	);
};

export default Product;
