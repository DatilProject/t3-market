import React from "react";

const Step3 = () => {
  return (
    <fieldset>
      <div className="form-card">
        <div className="form-group">
          <h2 className="fs-title mb-3">Motivo de la adopción</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Motivo"
          ></textarea>
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
        name="save"
        className="next action-button"
        value="Guardar"
      />
    </fieldset>
  );
};

export default Step3;
