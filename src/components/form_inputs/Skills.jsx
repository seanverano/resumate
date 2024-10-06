import React from "react";

const Skills = ({ data, handleChange }) => {
  return (
    <>
      <h3 className="font-jakarta font-bold w-4/5 m-2 text-xl text-[#323232]">
        Skills
      </h3>
      <input
        className="w-4/5 p-2 m-2 rounded text-[#8D9099] font-noto"
        type="text"
        id="skills"
        name="skills"
        value={data.skills}
        onChange={handleChange}
        placeholder="Skills"
      />
    </>
  );
};

export default Skills;
