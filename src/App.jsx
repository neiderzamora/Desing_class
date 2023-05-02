import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/index/Home";
import Page_not_found from "./components/index/Page_not_found";
import Questions from "./components/index/Questions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preguntas_frecuentes" element={<Questions />} />
        <Route path="/*" element={<Page_not_found />} />
      </Routes>
    </>
  );
}

export default App;
