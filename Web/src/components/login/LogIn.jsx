import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./LogIn.css";

const LogIn = () => {
  // const [error, seterror] = useState("alog mal");

  return (
    <Container>
      <Container
        id="login-container"
        className="col-11 col-lg-6 border border-light mb-5 mt-5"
      >
        <Row>
          <Col className="text-center">
            <img src="./../../assets/logo_datil.png" alt="Logo Dátil" />
          </Col>
        </Row>

        <Row className="mx-auto mb-5">
          <div className="col-12 col-lg-8 mx-auto">
            <div className="card">
              <Col className="text-center">
                <h3>Inicia sesión en Dátil</h3>
              </Col>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label name="username" className="font-weight-bold">
                      Usuario
                    </label>
                    <input type="text" className="form-control" />
                    <div className="invalid-feedback">
                      <div>Usuario requerido</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label name="password" className="font-weight-bold">
                      Contraseña
                    </label>
                    <input type="password" className="form-control" />
                    <div className="invalid-feedback">
                      <div>Contraseña requerida</div>
                    </div>
                  </div>

                  <Row id="botones">
                    <button
                      // disabled="*loading"
                      className="btn btn-primary mx-auto font-weight-bold"
                    >
                      {/* <span className="spinner-border spinner-border-sm mr-1"></span> */}
                      Iniciar Sesion
                    </button>
                  </Row>
                </form>
              </div>
            </div>
          </div>
        </Row>

        <Row className="mb-4">
          <Col className="text-center">
            <a href="registrar" className="txt2 bo1 ml-2">
              Olvidé mi contraseña
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LogIn;
