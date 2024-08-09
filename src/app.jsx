/** @format */

import React, { useState } from "react";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Home from "./pages/home";

function App() {
  const [text, setText] = useState();

  console.log("APPP render olunur");

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
