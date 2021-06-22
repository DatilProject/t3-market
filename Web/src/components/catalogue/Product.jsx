import React from "react";
import { Container, Figure } from "react-bootstrap";

const Product = ({ product }) => {
  const priceWithIVA = product.price * product.iva;
  return (
    <tr className="row-product">
      <td>
        <Figure>
          <Figure.Image
            className="my-auto"
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
      <td>{product.price}</td>
      <td>{priceWithIVA}</td>
      <td>{product.stock}</td>
      <td>{product.onSale}</td>
      <td></td>
    </tr>
  );
};

export default Product;
