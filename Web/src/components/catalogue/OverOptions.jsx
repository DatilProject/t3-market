import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const OverOptions = ({ deleteFunction, updateFunction }) => {
	return (
		<Container>
			<Row>
				<Col className="p-0 update-opcion text-center" onClick={updateFunction}>
					<FiEdit2 className="border border-secondary p-1 mr-1 rounded" size="1.7em" />
				</Col>

				<Col className="p-0 delete-opcion" onClick={deleteFunction}>
					<RiDeleteBin6Line
						className="border border-secondary p-1 rounded"
						size="1.7em"
						color="#Dd4e1a"
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default OverOptions;
