import React from "react";
import { Container, Row } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const OverOptions = () => {
	return (
		<Container>
			<Row>
				<FiEdit2 className="border border-secondary p-1 mr-1 rounded" size="1.7em" />

				<RiDeleteBin6Line
					className="border border-secondary p-1 rounded"
					size="1.7em"
					color="#Dd4e1a"
				/>
			</Row>
		</Container>
	);
};

export default OverOptions;
