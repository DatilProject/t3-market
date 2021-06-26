import React from "react";

const Step2 = () => {
  return (
    <fieldset>
      <div className="form-card">
        <h2 className="fs-title mb-3">Información de la mascota</h2>

        <div className="from-row mx-md-n1">
          <label className="col-5 d-none d-xl-inline-block" htmlFor="pet-name">
            Nombre
          </label>
          <label
            className="col-5 ml-md-4 d-none d-xl-inline-block"
            htmlFor="pet-age"
          >
            Edad (años)
          </label>
          <label
            className="col-1 ml-5 d-none d-xl-inline-block px-md-1"
            htmlFor="pet-gender"
          >
            Género
          </label>
        </div>
        <div className="form-row">
          <div className="col-12 col-lg-5">
            <input
              type="text"
              id="pet-name"
              name="pet-name"
              placeholder="Nombre"
            />
          </div>
          <div className="col-12 col-lg-5 mx-auto">
            <input
              type="number"
              id="pet-age"
              name="pet-age"
              placeholder="Edad"
            />
          </div>
          <div className="col-12 col-lg-1 mx-auto">
            <select className="list-dt" id="pet-gender" name="pet-gender">
              <option selected>Género</option>
              <option>Macho</option>
              <option>Hembra</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <label className="col-6 d-none d-xl-inline-block">Tipo</label>
          <label className="col-5 ml-1 d-none d-xl-inline-block ">Raza</label>
        </div>
        <div className="form-row">
          <div className="col-12 col-lg-5 ">
            <input
              list="pet-types"
              name="pet-type"
              id="pet-type"
              placeholder="Tipo"
            />
            <datalist id="pet-types">
              <option value="Perro"></option>
              <option value="Gato"></option>
              <option value="Loro"></option>
              <option value="Tortuga"></option>
            </datalist>
          </div>

          <div className="col-12 col-lg-5 mx-auto">
            <input
              list="type-races"
              name="type-race"
              id="type-race"
              placeholder="Raza"
            />
            <datalist id="type-races">
              <option value="Labrador"></option>
              <option value="Schnauzer"></option>
              <option value="Chiguagua"></option>
              <option value="Pitbull"></option>
            </datalist>
          </div>
        </div>

        <div className="form-row">
          <label className="col-6 d-none d-xl-inline-block">Color</label>
          <label className="col-5 ml-1 d-none d-xl-inline-block ">
            Esterilizado
          </label>
        </div>
        <div className="form-row">
          <div className="col-12 col-lg-5">
            <input
              type="text"
              id="pet-color"
              name="pet-color"
              placeholder="Color"
            />
          </div>
          <div className="col-12 col-lg-5 mx-auto mb-3">
            <select className="list-dt" id="pet-esteril" name="pet-esteril">
              <option selected>Esterelizado</option>
              <option>Si</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col-1" id="pet-picture"></div>
          <div className="col">
            <input type="file" name="picture" id="picture" />
          </div>
        </div>
      </div>
      <input
        type="button"
        name="previous"
        className="previous action-button-previous"
        value="Atrás"
      />
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Siguiente"
      />
    </fieldset>
  );
};

export default Step2;
