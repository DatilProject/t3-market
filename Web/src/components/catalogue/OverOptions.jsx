import React from "react";
import { Container, Row } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const OverOptions = (props) => {
	const deleteFunction = props.deleteFunction;

	return (
		<Container>
			<Row>
				<FiEdit2
					className="border border-secondary p-1 mr-1 rounded update-opcion"
					size="1.7em"
				/>

				<RiDeleteBin6Line
					className="border border-secondary p-1 rounded delete-opcion"
					size="1.7em"
					color="#Dd4e1a"
					onClick={deleteFunction}
				/>
			</Row>
		</Container>
	);
};

export default OverOptions;
