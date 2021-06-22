import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import Product from "./Product";

const ProductSection = () => {
  const listProducts = [
    {
      name: "Categoria 1",
      images: "",
    },
    {
      name: "Categoria 2",
      images: "",
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
                  placeholder="Buscar Categoría"
                  aria-label="Buscar Categoria"
                  aria-describedby="basic-addon2"
                ></input>
              </Col>
              <AiOutlineSearch size="2em" />
            </Row>
          </Col>

          <Col sm={{ size: "auto", offset: 7 }}>
            <Button variant="primary">Nueva Categoría</Button>
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
            <th className="col-1">Cantidad de Productos</th>
            <th className="col-1"></th>
          </tr>
        </thead>
        <tbody>
          {/* {listProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))} */}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductSection;
