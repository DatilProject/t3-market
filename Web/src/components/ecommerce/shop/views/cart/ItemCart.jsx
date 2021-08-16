import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { Button } from "react-bootstrap";

const ItemCart = ({ item }) => {
	const { product, pricePerUnit, totalPrice, quantity } = item;

	return (
		<tr>
			<td>
				<div className="row">
					<div className="col-3 d-none d-md-block">
						<img src={product.images[0].location} width="80" alt="Producto" />
					</div>
					<div className="col">
						<Link to="/product/detail" className="text-decoration-none">
							{product.name}
						</Link>
						{/* <p className="small text-muted">Size: XL, Color: blue, Brand: XYZ</p> */}
					</div>
				</div>
			</td>

			<td>
				<div className="input-group input-group-sm mw-140">
					<Button className="p-0 pl-1 pr-1">
						<FontAwesomeIcon icon={faMinus} />
					</Button>
					<input type="text" className="form-control" defaultValue={quantity} />
					<Button className="p-0 pl-1 pr-1">
						<FontAwesomeIcon icon={faPlus} />
					</Button>
				</div>
			</td>

			<td>
				<var className="price">{"$" + totalPrice}</var>
				<small className="d-block text-muted">{"$" + pricePerUnit} each</small>
			</td>
			<td className="text-right">
				{/* <button className="btn btn-sm btn-outline-secondary mr-2">
					<IconHeartFill className="i-va" />
				</button> */}
				<button className="btn btn-sm btn-outline-danger">
					<IconTrash className="i-va" />
				</button>
			</td>
		</tr>
	);
};

export default ItemCart;
