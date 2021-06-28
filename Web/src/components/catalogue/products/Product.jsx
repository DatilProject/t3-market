import React from "react";
import { Figure } from "react-bootstrap";
import ToggleButton from "../../common/toggle/ToggleButton";
import OverOptions from "../OverOptions";
import "./Product.css";

const Product = ({ product }) => {
	const priceWithIVA = (product.price * (1 * product.iva.percentage)) / 100;
	var srcImg = "";
	if (product.images.length > 0) {
		srcImg = product.images[0].location;
	}

	return (
		<tr className="row-product">
			<td className="text-center">
				<Figure className="my-auto">
					<Figure.Image
						className="my-auto product-image"
						width={171}
						height={180}
						alt="Producto"
						src={srcImg}
					/>
				</Figure>
			</td>
			<td>{product.name}</td>
			<td>
				<div>
					<div className="m-0 p-0">{product.main_code}</div>
				</div>
			</td>
			<td>{product.category.name}</td>
			<td>{"$" + product.price}</td>
			<td>{"$" + priceWithIVA}</td>
			<td>{product.stock}</td>
			<td>
				<ToggleButton active={product.on_sale} />
			</td>
			<td>
				<OverOptions />
			</td>
		</tr>
	);
};

export default Product;
