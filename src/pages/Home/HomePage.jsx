import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToTemplates = () => {
    navigate("/templates");
  };

  return (
    <div>
      <button onClick={goToTemplates}>Go to Templates (Button 1)</button>
      <button onClick={goToTemplates}>Go to Templates (Button 2)</button>
    </div>
  );
};

export default HomePage;
