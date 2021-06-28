import React, { useState } from "react";
import { useForm } from "react-hook-form";
import eventsMultiSteps from "./NewProductosActions.js";
import "./NewProduct.css";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

const NewProducto = () => {
  eventsMultiSteps();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    weight: 0,
    unit: 0,
    mainCode: "",
    auxiliaryCode: "",
    description: "",
    onSale: false,
    price: 0,
    iva: 0,
    images: [],

    stock: 0,
    ice: 0,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    console.log(data);
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
    // event.target.reset();
    // console.log(datos);
  };

  return (
    <div className="container-fluid" id="new-product">
      {/* <div className="row justify-content-center">
        <div className="col-11 col-sm-9 col-md-9 col-lg-10 text-center p-0 mb-2"> */}
      <div className="progressbar">
        <div className="col-12 col-md-12 p-0">
          <div id="container-progressbar">
            <ul id="progressbar" className="text-center pl-3">
              <li
                className="col active pl-lg-5 pr-lg-5"
                id="step-info-product"
              ></li>
              <li className="col pl-lg-5 pr-lg-5" id="step-info-price"></li>
              <li className="col pl-lg-5 pr-lg-5" id="step-photos"></li>
              <li className="col pl-lg-5 pr-lg-5" id="finish"></li>
            </ul>
          </div>
          <form id="form-new-product" onSubmit={handleSubmit(onSubmit)}>
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
