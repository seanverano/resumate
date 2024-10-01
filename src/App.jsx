import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import TemplatesPage from "./pages/Templates/TemplatesPage";
import ResumePage from "./pages/Build/ResumePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
