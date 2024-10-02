import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import TemplatePage from "./pages/Build/TemplatePage";
import Attribution from "./components/Attribution";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/attribution" element={<Attribution />} />
      </Routes>
    </Router>
  );
}

export default App;
