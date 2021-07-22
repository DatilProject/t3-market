import React from "react";
import "./styles/PageView.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";
import NavbarMain from "../common/Navbar";

const HomePageView = () => {
  return (
    <>
      <div>
        <ParticlesBg num={200} type="circle" bg={true} />
        <div className="mx-6">
          <NavbarMain/>
        </div>
        
        <div className="page-body">
          <div className="overview mt-5">
            <br />
            <br />
            <h1>Crea tu tienda</h1>
            <p className="lead mt-4">

            </p>
            <Link
              to="/market/templates"
              className="btn btn-lg btn-outline-light mt-4 mr-2"
            >
              Elige una plantilla
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageView;
