import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Step1 = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  return (
    <fieldset>
      <div className="form-card p-4">
        <h5 className="fs-title mb-3">Datos del Producto</h5>

        <div className="from-row mx-md-n1">
          <label className="col-7 d-none d-xl-inline-block mb-0">Nombre</label>
          <label className="col-4 ml-4 d-none d-xl-inline-block mb-0">
            Categoría
          </label>
        </div>
        <div className="form-row">
          <div className="col-12 col-lg-7">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              // {...register("name", {
              //   required: { value: true, message: "Nombre requerido" },
              // })}
            />
            {/* <span className="text-danger text-small d-block mb-2 fw-bold  ">
              {errors?.name?.message}
            </span> */}
          </div>

          <div className="col-12 col-lg-2 ml-lg-4">
            <select className="list-dt" id="category" name="category">
              <option defaultValue>Categoría</option>
              <option>Ropa</option>
              <option>Gamer</option>
              <option>Otros</option>
            </select>
          </div>
        </div>

        <div className="from-row">
          <label className="col-7 d-none d-xl-inline-block mb-0">
            Descripción
          </label>

          <label className="col-2 ml-md-4 d-none d-xl-inline-block mb-0">
            Peso
          </label>
          <label className="col-2 ml-md-4 d-none d-xl-inline-block mb-0">
            Unidad
          </label>
        </div>
        <div className="form-row">
          <div className="col-12 col-lg-7">
            <textarea
              rows="4"
              placeholder="Descripcion"
              name="description"
            ></textarea>
          </div>
          <div className="col-12 col-lg-2 mx-auto mx-xl-4">
            <input type="tel" name="weight" id="weight" placeholder="Peso" />
          </div>
          <div className="col-12 col-lg-2 mx-auto mx-xl-0">
            <select className="list-dt" id="unit" name="unit">
              <option defaultValue>Unidad</option>
              <option>Kg</option>
              <option>gr</option>
              <option>Otros</option>
            </select>
          </div>
        </div>

        <div className="from-row">
          <label className="col-7 d-none d-xl-inline-block mb-0">
            Código del Ítem
          </label>
        </div>
        <div className="form-row">
          <div className="col-12 col-xl-7">
            <input type="text" name="mainCode" placeholder="Código Principal" />
          </div>
          <div className="col-12 col-lg-4 ml-lg-4">
            <input
              type="text"
              name="auxiliaryCode"
              placeholder="Código Auxiliar"
            />
          </div>
        </div>
      </div>
      <Button variant="primary" className="next">
        Siguiente
      </Button>
    </fieldset>
  );
};

export default Step1;
