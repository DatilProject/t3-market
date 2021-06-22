import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import "./../../css/Catalogue.css";

const Catalogue = () => {
  return (
    <Container fluid className="section-container">
      <Container fluid className="mb-5 head-container shadow-sm">
        <Row noGutters className="p-3">
          <Col xs="2">
            <h5 className="m-auto text-secondary">Catalógo</h5>
          </Col>
          <Col xs="5">
            <h5 className="my-auto text-center text-secondary">Productos</h5>
          </Col>
          <Col xs="5">
            <h5 className="my-auto text-center text-secondary">Categorías</h5>
          </Col>
        </Row>
      </Container>

      <Container className="border border-secondary p-0 shadow-sm">
        <Container>
          <Row className="p-2 row justify-content-around">
            <Col xs="3">
              <Row>
                <Col>
                  <input
                    type="text"
                    class="form-control"
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
        <Table bordered hover responsive variant="light" className="m-0">
          <thead>
            <tr>
              <th>
                <AiOutlineCamera size="1.7em" />
              </th>
              <th className="col-3">Nombre</th>
              <th>Código</th>
              <th>Categoría</th>
              <th>Precio Unitario</th>
              <th>Precio con IVA</th>
              <th>Unidades</th>
              <th>Market</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default Catalogue;
