import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { BiCheck } from "react-icons/bi";
import { GiHand } from "react-icons/gi";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Panel = () => {
	const user = cookies.get("user");
	const nameUser = user["name"];

	return (
		<Container fluid className="section-container">
			<Container fluid className="mb-5 head-container">
				<Row noGutters className="p-4">
					<GiHand color="#E0AC69" size="3.5em" />
					<h5 className="my-auto ml-3">
						¡Hola <strong> {nameUser}</strong> !
					</h5>
				</Row>
			</Container>

			<Container>
				<Card className="pt-3">
					<Card.Title className="ml-3 mb-1">Empieza con Dátil</Card.Title>
					<Card.Text className="ml-3">
						Sigue estos pasos para empezar a emitir comprobantes electrónicos:
					</Card.Text>
					<Container>
						<Card className="mb-3">
							<ListGroup variant="flush">
								<ListGroup.Item>
									<BiCheck size="2rem" />
									Solicita al SRI autorización para emisión de comprobantes
									electrónicos
								</ListGroup.Item>
								<ListGroup.Item>
									<BiCheck size="2rem" />
									Configura tu certificado de firma electrónica
								</ListGroup.Item>
								<ListGroup.Item>
									<BiCheck size="2rem" />
									Escoge tu forma de pago
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Container>
				</Card>
			</Container>
		</Container>
	);
};

export default Panel;
