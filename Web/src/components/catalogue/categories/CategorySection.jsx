import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Category from "./Category";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryAction } from "../../../redux/ducks/categoryDucks";
import ModalNewCategory from "./ModalNewCategory";

const ProductSection = () => {
	const dispatch = useDispatch();
	const [showModalNewCategory, setShowModalNewCategory] = useState(false);

	useEffect(() => {
		dispatch(getCategoryAction());
	}, [dispatch]);

	const listCategories = useSelector((store) => store.categories.array);
	console.log(listCategories);

	const handleNewCategory = () => {
		setShowModalNewCategory(true);
		// dispatch(postCategoryAction());
	};

	return (
		<Container className="border border-secondary p-0 shadow-sm table">
			<ModalNewCategory show={showModalNewCategory} setShow={setShowModalNewCategory} />
			<Container className="text-center">
				<Row className="p-2 row  text-sm-left">
					<Col xs="12" sm="6">
						<Row>
							<Col xs="8" lg="5 " className="pr-0">
								<input
									type="text"
									className="form-control"
									placeholder="Buscar Categoría"
									aria-label="Buscar Categoria"
									aria-describedby="basic-addon2"
								></input>
							</Col>
							<Col className="pl-1">
								<AiOutlineSearch size="2em" />
							</Col>
						</Row>
					</Col>

					<Col xs="12" sm="6" className="text-sm-right">
						<Button variant="primary" onClick={handleNewCategory}>
							Nueva Categoría
						</Button>
					</Col>
				</Row>
			</Container>
			<Table hover responsive className="m-0 my-auto">
				<thead>
					<tr>
						<th className="col-5">Nombre</th>
						<th className="col-5">Cantidad de Productos</th>
						<th className="col-1"></th>
					</tr>
				</thead>
				<tbody>
					{listCategories.map((category, index) => (
						<Category key={index} category={category} />
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default ProductSection;
