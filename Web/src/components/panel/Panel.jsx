import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { BiCheck } from "react-icons/bi";
import { GiHand } from "react-icons/gi";

const Panel = () => {
  const [user, setuser] = useState({ username: "Josue" });

  return (
    <Container>
      <Card body>This is some text within a card body.</Card>
      <Container className="mb-5 ">
        <Container fluid>
          <Row>
            <GiHand color="#E0AC69" size="3em" />
            <p className="my-auto">
              ¡Hola <strong> {user.username}</strong> !
            </p>
          </Row>
        </Container>
      </Container>

      <Container>
        <Card className="pt-3">
          <Card.Title className="ml-3 mb-1">Empieza con Dátil</Card.Title>
          <Card.Text className="ml-3">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Container>
            <Card className="mb-3">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <BiCheck size="2rem" /> Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item>
                  <BiCheck size="2rem" />
                  Dapibus ac facilisis in
                </ListGroup.Item>
                <ListGroup.Item>
                  <BiCheck size="2rem" />
                  Vestibulum at eros
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Container>
        </Card>
      </Container>

      <Container></Container>
    </Container>
  );
};

export default Panel;
