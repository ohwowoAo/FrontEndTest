/* eslint-disable react/jsx-no-undef */
import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import SecondQ from "./components/SecondQ";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/second" element={<SecondQ />} />
      </Routes>
    </>
  );
};

export default App;
