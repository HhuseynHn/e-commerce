/** @format */

// import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DarkMode from "./components/dark-mode";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Contact from "./pages/contact-page";
import Home from "./pages/home-page";
import ProductDetails from "./pages/product-details";
import ServicePage from "./pages/service-page";

function App() {
  console.log("APPP render olunur");

  return (
    <>
      <Header />

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
