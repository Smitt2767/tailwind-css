import Buttons from "pages/Buttons";
import Home from "pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </>
  );
};

export default App;
