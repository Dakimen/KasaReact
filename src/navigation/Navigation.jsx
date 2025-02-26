import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import AboutUs from "../pages/about-us/AboutUs";
import Error404 from "../pages/error-404/Error404";
import Home from "../pages/home/Home";
import Logement from "../pages/logement/Logement";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/error-404" element={<Error404 />} />
        <Route path="/*" element={<Navigate replace to="/error-404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
