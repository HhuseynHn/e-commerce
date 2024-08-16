/** @format */

// import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DarkMode from "./components/dark-mode";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Contact from "./pages/contact-page";
import Home from "./pages/home-page";
import ServicePage from "./pages/service-page";

function App() {
  // const [text, setText] = useState();

  console.log("APPP render olunur");
  let a = 9
  return (
    <>
      <Header />

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
