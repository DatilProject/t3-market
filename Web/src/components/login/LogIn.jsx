import React, { useState } from "react";
import { Container, Row, Col, Figure, Button } from "react-bootstrap";
import LogoDatil from "./../../assets/logo_datil.png";
import { useForm } from "react-hook-form";
import "./LogIn.css";

const LogIn = () => {
  const [datos, setDatos] = useState({
    username: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [error, seterror] = useState("alog mal");

  const onSubmit = (data, event) => {
    console.log(data);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    event.target.reset();
    console.log(datos);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Container
        id="login-container"
        className="col-11 col-lg-6 border border-light mb-5 mt-5"
      >
        <Row>
          <Col className="text-center mt-4">
            <Figure>
              <Figure.Image
                className="my-auto"
                width={171}
                height={180}
                alt="Producto"
                src={LogoDatil}
              />
            </Figure>
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
                    <label className="font-weight-bold">Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      // {...register("username", {
                      //   required: { value: true, message: "Required" },
                      // })}
                    />
                    <div className="invalid-feedback">
                      <div>Usuario requerido</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                    />
                    <div className="invalid-feedback">
                      <div>Contraseña requerida</div>
                    </div>
                  </div>

                  <Row id="login-button">
                    <Button
                      // disabled="loading"
                      type="submit"
                      variant="primary"
                      className="mx-auto font-weight-bold"
                    >
                      {/* <span className="spinner-border spinner-border-sm mr-1"></span> */}
                      Entrar
                    </Button>
                  </Row>
                </form>
              </div>
            </div>
          </div>
        </Row>

        <Row className="mb-4">
          <Col className="text-center">
            <a href="#" className="txt2 bo1 ml-2">
              Olvidé mi contraseña
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LogIn;
