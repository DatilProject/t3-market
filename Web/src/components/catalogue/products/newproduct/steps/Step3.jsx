import React from "react";
import { Button } from "react-bootstrap";

const Step3 = () => {
  return (
    <fieldset>
      <div className="form-card">
        <div className="form-group">
          <h2 className="fs-title mb-3">Fotos</h2>
          {/* <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Aqui Poner Fotos"
          ></textarea> */}
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          ></input>
        </div>
      </div>
      <Button variant="secondary" className="previous">
        Atrás
      </Button>
      <Button variant="primary" className="next">
        Siguiente
      </Button>
    </fieldset>
  );
};

export default Step3;
