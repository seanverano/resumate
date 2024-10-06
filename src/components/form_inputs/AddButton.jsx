import React from "react";

const AddButton = ({
  handleExpClick,
  expTemplate,
  handleProjectClick,
  projectTemplate,
  handleEduClick,
  eduTemplate,
}) => {
  return (
    <>
      <h3 className="font-jakarta font-bold w-4/5 m-2 text-xl text-[#323232]">
        Experience
      </h3>
      <button
        className="w-4/5 rounded font-jakarta font-bold bg-[#7175FE] text-[#FFFFFF] hover:bg-transparent hover:text-[#7175FE] m-2 p-2 text-center"
        onClick={handleExpClick}
      >
        Add Experience
      </button>
      {expTemplate.map((el) => el)}

      <h3 className="font-jakarta font-bold w-4/5 m-2 text-xl text-[#323232]">
        Projects
      </h3>
      <button
        className="w-4/5 rounded font-jakarta font-bold bg-[#7175FE] text-[#FFFFFF] hover:bg-transparent hover:text-[#7175FE] m-2 p-2 text-center"
        onClick={handleProjectClick}
      >
        Add Project
      </button>
      {projectTemplate.map((el) => el)}
      <h3 className="font-jakarta font-bold w-4/5 m-2 text-xl text-[#323232]">
        Education
      </h3>
      <button
        className="w-4/5 rounded font-jakarta font-bold bg-[#7175FE] text-[#FFFFFF] hover:bg-transparent hover:text-[#7175FE] m-2 p-2 text-center"
        onClick={handleEduClick}
      >
        Add Education
      </button>
      {eduTemplate.map((el) => el)}
    </>
  );
};

export default AddButton;
