/** @format */

import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import EnhancedTable from "./pages/basket-page";
import Contact from "./pages/contact-page";
import ErrorPage from "./pages/error-page";
import Home from "./pages/home-page";
import LoginPage from "./pages/login-page";

import ProductDetails from "./pages/product-details";
import ServicePage from "./pages/service-page";
import BankAccount from "./pages/service-page/bank-accaunt/bank-aacount";

function App() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} /> // default page
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/basket" element={<EnhancedTable />} /> // basket
        <Route path="/new-order" element={<BankAccount />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
