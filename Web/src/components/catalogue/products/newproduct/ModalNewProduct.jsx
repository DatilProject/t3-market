import React from "react";
import { Modal } from "react-bootstrap";
import NewProducto from "./NewProduct";

const ModalNewProduct = ({ show, setShow, infoProduct }) => {
	const handleClose = () => setShow(false);

	return (
		<Modal
			show={show}
			onHide={handleClose}
			backdrop="static"
			size="lg"
			keyboard={false}
			centered
		>
			<Modal.Header closeButton className="pt-2 pb-2">
				<Modal.Title>Nuevo Producto</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<NewProducto infoProduct={infoProduct} />
			</Modal.Body>
		</Modal>
	);
};

export default ModalNewProduct;
