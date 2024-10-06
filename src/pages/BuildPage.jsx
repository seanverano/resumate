//build page

import React, { useState } from "react";
import Resume from "../components/Resume";
import { useNavigate } from "react-router-dom";
import PDFDownloader from "../components/PDFDownloader.jsx";
import TemplateSelect from "../components/form_inputs/TemplateSelect.jsx";
import PersonalInfo from "../components/form_inputs/PersonalInfo.jsx";
import Skills from "../components/form_inputs/Skills.jsx";
import AddButton from "../components/form_inputs/AddButton.jsx";

function BuildPage() {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  // PROFILE/USER INFO/PERSONAL DETAILS
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    linkOne: "",
    linkTwo: "",
    linkThree: "",
    address: "",
    wantedJobTitle: "",
    summary: "",
    skills: "",
  });

  // EXPERIENCE/EMPLOYMENT
  const [experience, setExperience] = useState({
    jobTitles: {},
    exp: {},
    jobDesc: {},
    jobStartDate: {},
    jobEndDate: {},
  });

  // EDUCATION/ACADEMICS
  const [education, setEducation] = useState({
    qual: {},
    edu: {},
    eduDesc: {},
    eduStartDate: {},
    eduEndDate: {},
  });

  // PROJECTS
  const [project, setProject] = useState({
    projectTitles: {},
    projectDesc: {},
    projectStartDate: {},
    projectEndDate: {},
  });

  const [type, setType] = useState("unus");
  const [headerColor, setHeaderColor] = useState("#ffffff");
  const [headerTextColor, setHeaderTextColor] = useState("#000000");

  const [expTemplate, setExpTemplate] = useState([]);
  const [eduTemplate, setEduTemplate] = useState([]);
  const [projectTemplate, setProjectTemplate] = useState([]);

  const [expCount, setExpCount] = useState(0);
  const [eduCount, setEduCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  //Handles adding work experience
  const handleExpClick = (e) => {
    e.preventDefault();
    let i = expCount;
    ++i;
    const template = (
      <div className="w-4/5 p-2 m-2" key={`expKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2 font-noto" htmlFor={`jobStartDate${i}`}>
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`jobStartDate${i}`}
            name={`jobStartDate${i}`}
            onChange={handleChange}
          />
          <label className="p-2 font-noto" htmlFor={`jobEndDate${i}`}>
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`jobEndDate${i}`}
            name={`jobEndDate${i}`}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded text-[#8D9099] font-noto"
          type="text"
          id={`jobTitle${i}`}
          name={`jobTitle${i}`}
          placeholder="Job Title"
          onChange={handleChange}
        />
        <input
          className="w-full p-2 m-2 rounded text-[#8D9099] font-noto"
          type="text"
          id={`exp${i}`}
          name={`exp${i}`}
          placeholder="Company"
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded text-[#8D9099] font-noto"
          name={`jobDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={handleChange}
        />
      </div>
    );

    const expArray = [...expTemplate];
    expArray.push(template);
    setExpTemplate(expArray);
    setExpCount(i);
  };

  //Handles adding projects
  const handleProjectClick = (e) => {
    e.preventDefault();
    let i = projectCount;
    ++i;
    const template = (
      <div className="w-4/5 p-2 m-2" key={`projKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2 font-noto" htmlFor={`projectStartDate${i}`}>
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`projectStartDate${i}`}
            name={`projectStartDate${i}`}
            onChange={handleChange}
          />
          <label className="p-2 font-noto" htmlFor={`projectEndDate${i}`}>
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`projectEndDate${i}`}
            name={`projectEndDate${i}`}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded text-[#8D9099] font-noto"
          type="text"
          id={`projectTitle${i}`}
          name={`projectTitle${i}`}
          placeholder="Project Title"
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded text-[#8D9099] font-noto"
          name={`projectDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={handleChange}
        />
      </div>
    );

    const projectArray = [...projectTemplate];
    projectArray.push(template);
    setProjectTemplate(projectArray);
    setProjectCount(i);
  };

  //Handles adding education
  const handleEduClick = (e) => {
    e.preventDefault();
    let i = eduCount;
    ++i;
    const template = (
      <div className="w-4/5 p-2 m-2" key={`eduKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2 font-noto" htmlFor={`eduStartDate${i}`}>
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`eduStartDate${i}`}
            name={`eduStartDate${i}`}
            onChange={handleChange}
          />
          <label className="p-2 font-noto" htmlFor={`eduEndDate${i}`}>
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`eduEndDate${i}`}
            name={`eduEndDate${i}`}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded text-[#8D9099] font-noto"
          type="text"
          id={`qual${i}`}
          name={`qual${i}`}
          placeholder="Qualification"
          onChange={handleChange}
        />
        <input
          className="w-full p-2 m-2 rounded text-[#8D9099] font-noto"
          type="text"
          id={`educ${i}`}
          name={`educ${i}`}
          placeholder="School/College"
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded text-[#8D9099] font-noto"
          name={`eduDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={handleChange}
        />
      </div>
    );

    const eduArray = [...eduTemplate];
    eduArray.push(template);
    setEduTemplate(eduArray);
    setEduCount(i);
  };

  //handles the updating of state based on user inputs
  //this manage forms dynamically for smooth and responsive user experience
  const handleChange = (e) => {
    const userData = { ...data };
    const expData = { ...experience };
    const eduData = { ...education };
    const projectData = { ...project };

    if (e.target.name === "templates") {
      setType(e.target.value);
      setHeaderColor(e.target.value === "unus" ? "#FFFFFF" : "#2933c2");
      setHeaderTextColor(e.target.value === "unus" ? "#000000" : "#FFFFFF");
    } else if (e.target.name === "headerColor") {
      setHeaderColor(e.target.value);
    } else if (e.target.name === "headerTextColor") {
      setHeaderTextColor(e.target.value);
    } else if (e.target.name.includes("jobTitle")) {
      expData.jobTitles[e.target.name] = e.target.value;
    } else if (e.target.name.includes("emp")) {
      expData.emp[e.target.name] = e.target.value;
    } else if (e.target.name.includes("jobDesc")) {
      expData.jobDesc[e.target.name] = e.target.value;
    } else if (e.target.name.includes("jobStartDate")) {
      expData.jobStartDate[e.target.name] = e.target.value;
    } else if (e.target.name.includes("jobEndDate")) {
      expData.jobEndDate[e.target.name] = e.target.value;
    } else if (e.target.name.includes("qual")) {
      eduData.qual[e.target.name] = e.target.value;
    } else if (e.target.name.includes("educ")) {
      eduData.edu[e.target.name] = e.target.value;
    } else if (e.target.name.includes("eduDesc")) {
      eduData.eduDesc[e.target.name] = e.target.value;
    } else if (e.target.name.includes("eduStartDate")) {
      eduData.eduStartDate[e.target.name] = e.target.value;
    } else if (e.target.name.includes("eduEndDate")) {
      eduData.eduEndDate[e.target.name] = e.target.value;
    } else if (e.target.name.includes("projectTitle")) {
      projectData.projectTitles[e.target.name] = e.target.value;
    } else if (e.target.name.includes("projectDesc")) {
      projectData.projectDesc[e.target.name] = e.target.value;
    } else if (e.target.name.includes("projectStartDate")) {
      projectData.projectStartDate[e.target.name] = e.target.value;
    } else if (e.target.name.includes("projectEndDate")) {
      projectData.projectEndDate[e.target.name] = e.target.value;
    } else {
      userData[e.target.name] = e.target.value;
    }

    setData(userData);
    setExperience(expData);
    setEducation(eduData);
    setProject(projectData);
  };

  //left side of the build page
  //includes two buttons (home and download pdf)
  //and form for user inputs
  return (
    <div className="w-screen h-full bg-gray-light text-gray-dark font-sans bg-[#EBF5FF]">
      <div className="flex p-3 print:p-0">
        <form className="w-2/5 flex flex-col justify-evenly print:hidden bg-[#EBF5FF]">
          <div className="flex flex-row items-center justify-center gap-4">
            <button
              onClick={goHome}
              className="text-base font-jakarta font-bold
            text-[#323232] bg-[#FFFFFF] rounded-lg px-4 py-2
            hover:bg-transparent hover:text-[#7175FE] transition duration-300
            ml-2"
            >
              <svg
                className="w-5 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>{" "}
              Home
            </button>
            <PDFDownloader>
              {({ downloadPDF, isDownloading, error }) => (
                <button
                  onClick={downloadPDF}
                  disabled={isDownloading}
                  className="text-base font-jakarta font-bold text-[#FFFFFF] bg-[#7175FE] rounded-lg px-4 py-2 hover:bg-transparent hover:text-[#7175FE] transition duration-300"
                >
                  <svg
                    className="w-5 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>{" "}
                  {isDownloading ? "Downloading..." : "Download PDF"}
                </button>
              )}
            </PDFDownloader>
          </div>
          <TemplateSelect handleChange={handleChange} type={type} />
          <div className="w-4/5">
            <label
              className="font-jakarta font-bold m-2 text-xl block text-[#323232]"
              htmlFor="headerColor"
            >
              Header Color
            </label>
            <input
              className="mx-2 border-2 border-white rounded"
              type="color"
              id="headerColor"
              name="headerColor"
              onChange={handleChange}
              value={headerColor}
            />
          </div>
          <div className="w-4/5">
            <label
              className="font-jakarta font-bold m-2 text-xl block text-[#323232]"
              htmlFor="headerTextColor"
            >
              Header Text Color
            </label>
            <input
              className="mx-2 border-2 border-white rounded"
              type="color"
              id="headerTextColor"
              name="headerTextColor"
              onChange={handleChange}
              value={headerTextColor}
            />
          </div>
          <PersonalInfo data={data} handleChange={handleChange} />
          <Skills data={data} handleChange={handleChange} />
          <AddButton
            handleExpClick={handleExpClick}
            expTemplate={expTemplate}
            handleProjectClick={handleProjectClick}
            projectTemplate={projectTemplate}
            handleEduClick={handleEduClick}
            eduTemplate={eduTemplate}
          />
        </form>

        {/*this displays the resume data from the component into live preview */}
        <div className="w-3/5">
          <Resume
            userData={data}
            expData={experience}
            expCount={expCount}
            eduData={education}
            eduCount={eduCount}
            projectData={project}
            projectCount={projectCount}
            type={type}
            headerColor={headerColor}
            headerTextColor={headerTextColor}
          />
        </div>
      </div>
    </div>
  );
}

export default BuildPage;
