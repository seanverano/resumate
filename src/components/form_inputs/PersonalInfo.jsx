//using input (form element) user can input their personal infos

import React from "react";

const PersonalInfo = ({ data, handleChange }) => {
  return (
    <>
      <h3 className="font-jakarta font-bold w-4/5 m-2 text-xl text-[#323232]">
        Personal Information
      </h3>
      <input
        className="w-4/5 p-2 m-2 rounded text-[#8D9099] font-noto"
        type="text"
        id="name"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className="w-4/5 p-2 m-2 rounded"
        type="text"
        id="wantedJobTitle"
        name="wantedJobTitle"
        value={data.wantedJobTitle}
        onChange={handleChange}
        placeholder="Job Title"
      />
      <input
        className="w-4/5 p-2 m-2 rounded text-[#8D9099] font-noto"
        type="email"
        id="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        className="w-4/5 p-2 m-2 rounded text-[#8D9099] font-noto"
        type="tel"
        id="phone"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        className="w-4/5 p-2 m-2 rounded text-[#8D9099] font-noto"
        type="text"
        id="address"
        name="address"
        value={data.address}
        onChange={handleChange}
        placeholder="City, Country"
      />
      <input
        className="w-4/5 p-2 m-2 rounded text-[#8D9099] font-noto"
        type="url"
        id="linkOne"
        name="linkOne"
        value={data.linkOne}
        onChange={handleChange}
        placeholder="Link 1"
      />
      <input
        className="w-4/5 p-2 m-2 rounded text-[#8D9099] font-noto"
        type="url"
        id="linkTwo"
        name="linkTwo"
        value={data.linkTwo}
        onChange={handleChange}
        placeholder="Link 2"
      />
      <input
        className="w-4/5 p-2 m-2 rounded text-[#8D9099] font-noto"
        type="url"
        id="linkThree"
        name="linkThree"
        value={data.linkThree}
        onChange={handleChange}
        placeholder="Link 3"
      />
    </>
  );
};

export default PersonalInfo;
