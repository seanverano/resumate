import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Landing/HomePage";
import TemplatesPage from "./components/Templates/TemplatesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<TemplatesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
