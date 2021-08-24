import React, { useState } from "react";
import { Figure } from "react-bootstrap";
import ToggleButton from "../../common/toggle/ToggleButton";
import ModalNewProduct from "./newproduct/ModalNewProduct";
import OverOptions from "../OverOptions";
import "./Product.css";
import { useDispatch } from "react-redux";
import { deleteProductsAction } from "../../../redux/ducks/productDucks";
import { Fragment } from "react";

const Product = ({ product }) => {
	const dispatch = useDispatch();
	const [showModalUpdateProduct, setShowModalUpdateProduct] = useState(false);

	var priceWithIVA = (product.price * (1 * product.iva.percentage)) / 100;
	priceWithIVA = Number(priceWithIVA.toFixed(2));

	var srcImg = "";
	if (product.images.length > 0) {
		srcImg = product.images[0].location;
	}

	const deleteProduct = () => {
		dispatch(deleteProductsAction(product.id));
	};

	const handleUpdateProduct = () => {
		setShowModalUpdateProduct(true);
	};

	return (
		<Fragment>
			<ModalNewProduct
				show={showModalUpdateProduct}
				setShow={setShowModalUpdateProduct}
				infoProduct={product}
			/>

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
				<td>{product.category ? product.category.name : null}</td>
				<td>{"$" + product.price}</td>
				<td>{"$" + priceWithIVA}</td>
				<td>{product.stock}</td>
				<td>
					<ToggleButton active={product.on_sale} block />
				</td>
				<td>
					<OverOptions
						deleteFunction={deleteProduct}
						updateFunction={handleUpdateProduct}
					/>
				</td>
			</tr>
		</Fragment>
	);
};

export default Product;
