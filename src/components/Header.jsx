import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const viewFeatures = () => {
    navigate("#features-section");
  };

  const viewTemplates = () => {
    navigate("#templates-section");
  };
  return (
    <header className="fixed top-0 left-0 right-0 mt-4 mb-4 mx-auto bg-white/30 backdrop-blur-md shadow-md rounded-lg z-50">
      <nav className="max-w-7xl mx-auto p-4">
        <ul className="flex flex-row items-center list-none">
          <li className="mr-4">
            <img src={Logo} alt="Resumate Logo" className="w-24" />
          </li>
          <li className="mr-4">
            <button onClick={goHome} className="">
              Home
            </button>
          </li>
          <li className="mr-4">
            <button onClick={viewFeatures} className="">
              Features
            </button>
          </li>
          <li className="mr-4">
            <button onClick={viewTemplates} className="">
              Templates
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
