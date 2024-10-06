//using select (form element) user can choose between the two templates

import React from "react";

const TemplateSelect = ({ handleChange, type }) => {
  return (
    <>
      <h3 className="font-jakarta font-bold w-4/5 m-2 text-xl block text-[#323232]">
        Template
      </h3>
      <select
        className="w-4/5 p-2 m-2 rounded font-noto "
        name="templates"
        id="templates"
        onChange={handleChange}
        value={type}
      >
        <option value="unus">Unus</option>
        <option value="duo">Duo</option>
      </select>
    </>
  );
};

export default TemplateSelect;
