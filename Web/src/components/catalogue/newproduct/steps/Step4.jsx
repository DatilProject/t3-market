import React from "react";

const Step4 = () => {
  return (
    <fieldset>
      <div className="form-card">
        <h2 className="fs-title text-center">Guardado con éxito !</h2>
        <div className="row justify-content-center">
          <div className="col-6 col-lg-2">
            <img
              src="https://img.icons8.com/color/96/000000/ok--v2.png"
              className="fit-image"
              alt="Guarda exitoso"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-7 text-center">
            <h5>Adopción registrada</h5>
          </div>
        </div>
      </div>
      <input
        type="button"
        name="finish"
        className="submit action-button"
        value="Finalizar"
      />
    </fieldset>
  );
};

export default Step4;
