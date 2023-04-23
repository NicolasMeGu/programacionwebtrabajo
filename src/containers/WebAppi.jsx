import React from "react";
import logo from "../images/IA (2).jpg";
import Layout from "./Layout";

function WebAppi() {
  return (
    <Layout>
        <div className="card container p-4 w-100">
      <div className="main-header ">
        <img src={logo} className="card-img-top" alt="..." />
        <div className="card-body align-items-center">
          <h5 className="card-title">LENGUAJES DE PROGRAMACIÓN</h5>
          <p className="card-text">
            Programación para el desarrollo de compentencias.
          </p>
        </div>
      </div>
    </div>
    
    </Layout>
    
  );
}

export default WebAppi;
