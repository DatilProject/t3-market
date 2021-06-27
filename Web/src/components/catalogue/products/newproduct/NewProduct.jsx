import React from "react";
import "./NewProduct.css";
import eventsMultiSteps from "./NewProductosActions.js";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

const NewProducto = () => {
  eventsMultiSteps();
  // const [errorForm, seterrorForm] = useState("valiste");

  return (
    <div className="container-fluid" id="new-product">
      {/* <div className="row justify-content-center">
        <div className="col-11 col-sm-9 col-md-9 col-lg-10 text-center p-0 mb-2"> */}
      <div className="progressbar">
        <div className="col-12 col-md-12 p-0">
          <div id="container-progressbar">
            <ul id="progressbar" className="text-center pl-3">
              <li className="col active pl-lg-5 pr-lg-5" id="dueño"></li>
              <li className="col pl-lg-5 pr-lg-5" id="mascota"></li>
              <li className="col pl-lg-5 pr-lg-5" id="motivo"></li>
              <li className="col pl-lg-5 pr-lg-5" id="finish"></li>
            </ul>
          </div>
          <form id="form_persona">
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            {/* <p id="errorAdopcion">{errorForm}</p> */}
          </form>
          {/* </div> */}
          {/* </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewProducto;
