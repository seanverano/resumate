import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuildPage from "./pages/BuildPage";
import AttributionPage from "./pages/AttributionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/build-resume" element={<BuildPage />} />
        <Route path="/attribution" element={<AttributionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
