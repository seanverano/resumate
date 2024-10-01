import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const viewTemplates = () => {
    navigate("/templates");
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Logo</li>
            <li>Home</li>
            <li>
              <button onClick={viewTemplates}>Templates</button>
            </li>
            <li>Features</li>
          </ul>
        </nav>
      </header>
      <button onClick={viewTemplates}>Getting Started</button>
    </div>
  );
}

export default HomePage;
