import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Template from "./pages/Build/Template";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </Router>
  );
}

export default App;
