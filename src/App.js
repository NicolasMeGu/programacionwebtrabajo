import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/Global.css";
import Login from "./containers/Login";
import RecoveryPassword from "./containers/RecoveryPassword";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Layout from "./containers/Layout";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Webappi from "./containers/WebAppi";
import About2 from "./containers/About2";
import Contact2 from "./containers/Contact2";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/login" Component={Login}></Route>
          <Route exact path="/recovery" Component={RecoveryPassword}></Route>
          <Route exact path="/home" Component={Home}></Route>
          <Route exact path="/header" Component={Header}></Route>
          <Route exact path="/footer" Component={Footer}></Route>
          <Route exact path="/about" Component={About2}></Route>
          <Route exact path="/contact" Component={Contact2}></Route>
          <Route exact path="/webappi" Component={Webappi}></Route>
          <Route exact path="*" Component={NotFound}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
