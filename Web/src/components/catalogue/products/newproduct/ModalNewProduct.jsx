import React from "react";
import { Modal } from "react-bootstrap";
import NewProducto from "./NewProduct";

const ModalNewProduct = (props) => {
	const handleClose = () => props.setShow(false);

	return (
		<Modal
			show={props.show}
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
				<NewProducto />
			</Modal.Body>
			{/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer> */}
		</Modal>
	);
};

export default ModalNewProduct;
