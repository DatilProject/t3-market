import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import Product from "./Product";

const ProductSection = () => {
  const listProducts = [
    {
      images: "",
      name: "Producto de test",
      mainCode: "Xtesd-kkdsn",
      category: "Test",
      price: 44,
      iva: 12,
      stock: 44,
      onSale: true,
    },
    {
      images: "",
      name: "Producto de test 2",
      mainCode: "Xtesd-kkkk-4",
      category: "Test2",
      price: 14,
      iva: 10,
      stock: 22,
      onSale: true,
    },
  ];

  return (
    <Container className="border border-secondary p-0 shadow-sm table">
      <Container>
        <Row className="p-2 row justify-content-around">
          <Col xs="3">
            <Row>
              <Col className="pr-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar Producto"
                  aria-label="Buscar Producto"
                  aria-describedby="basic-addon2"
                ></input>
              </Col>
              <AiOutlineSearch size="2em" />
            </Row>
          </Col>

          <Col sm={{ size: "auto", offset: 7 }}>
            <Button variant="primary">Nuevo Producto</Button>
          </Col>
        </Row>
      </Container>
      <Table hover responsive className="m-0 my-auto">
        <thead>
          <tr>
            <th className="col-1">
              <AiOutlineCamera size="1.7em" />
            </th>
            <th className="col-3">Nombre</th>
            <th className="col-1">Código</th>
            <th className="col-1">Categoría</th>
            <th className="col-1">Precio Unitario</th>
            <th className="col-1">Precio con IVA</th>
            <th className="col-1">Unidades</th>
            <th className="col-1">Market</th>
            <th className="col-1"></th>
          </tr>
        </thead>
        <tbody>
          {listProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductSection;
