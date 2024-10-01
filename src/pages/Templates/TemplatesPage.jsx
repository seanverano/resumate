import { useNavigate } from "react-router-dom";

function TemplatesPage() {
  const navigate = useNavigate();

  const buildResume = () => {
    navigate("/resume");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen space-y-8">
        <h1 className="font-bold text-center text-lg font-jakarta">
          Templates
        </h1>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://images.unsplash.com/photo-1642071220783-8c8bd43b6931?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A1 placeholder"
              className="w-50 h-80 object-cover"
            />
            <button
              onClick={buildResume}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Template 1
            </button>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://images.unsplash.com/photo-1642071220783-8c8bd43b6931?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A2 placeholder"
              className="w-50 h-80 object-cover"
            />
            <button
              onClick={buildResume}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Template 2
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TemplatesPage;
