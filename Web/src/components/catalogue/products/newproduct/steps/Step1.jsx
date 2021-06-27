import React from "react";
import { Button } from "react-bootstrap";

const Step1 = () => {
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
            <input type="text" id="uname" name="uname" placeholder="Nombre" />
          </div>

          <div className="col-12 col-lg-2 ml-lg-4">
            <select className="list-dt" id="gender" name="gender">
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
            <textarea rows="4" placeholder="Descripcion"></textarea>
          </div>
          <div className="col-12 col-lg-2 mx-auto mx-xl-4">
            <input type="tel" name="phone" id="phone" placeholder="Peso" />
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
            <input type="text" name="address" placeholder="Código Principal" />
          </div>
          <div className="col-12 col-lg-4 ml-lg-4">
            <input
              type="text"
              id="user-cuidad"
              name="user-cuidad"
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
