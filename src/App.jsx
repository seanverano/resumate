import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuildPage from "./pages/BuildPage";
import Attribution from "./components/Attribution";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/build-resume" element={<BuildPage />} />
        <Route path="/attribution" element={<Attribution />} />
      </Routes>
    </Router>
  );
}

export default App;
