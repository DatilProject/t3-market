import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const OverOptions = (props) => {
	const deleteFunction = props.deleteFunction;

	return (
		<Container>
			<Row>
				<Col className="p-0 update-opcion text-center">
					<FiEdit2 className="border border-secondary p-1 mr-1 rounded" size="1.7em" />
				</Col>

				<Col className="p-0 delete-opcion">
					<RiDeleteBin6Line
						className="border border-secondary p-1 rounded"
						size="1.7em"
						color="#Dd4e1a"
						onClick={deleteFunction}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default OverOptions;
