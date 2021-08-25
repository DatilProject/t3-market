import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { postCategoryAction } from "../../../redux/ducks/categoryDucks";

const ModalNewCategory = ({ show, setShow }) => {
	const dispatch = useDispatch();
	const handleClose = () => setShow(false);
	const [category, setCategory] = useState({ name: "" });

	const handleChangeNewCategory = (event) => {
		setCategory({
			...category,
			[event.target.name]: event.target.value,
		});
	};

	const createNewCategory = () => {
		dispatch(postCategoryAction(category));
		setShow(false);
	};

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
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							placeholder="Nombre Nueva Categoría"
							name="name"
							onChange={handleChangeNewCategory}
						/>
						{/* <Form.Text className="text-muted">
							{"Al crear la categoria, podrá "}
						</Form.Text> */}
					</Form.Group>
				</Form>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="primary" type="submit" onClick={createNewCategory}>
					Crear
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalNewCategory;
