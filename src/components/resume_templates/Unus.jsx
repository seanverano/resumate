import React from "react";

//FIRST TEMPLATE: UNUS
const Unus = ({
  headerColor,
  headerTextColor,
  profile,
  expCount,
  experience,
  projectCount,
  project,
  eduCount,
  education,
}) => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        margin: "0 auto",
        width: "8.5in",
        height: "11in",
        backgroundColor: "#fff",
        boxShadow: "0 3px 8px -3px rgba(0, 0, 0, 0.7)",
      }}
      className="font-timesnewroman"
    >
      <header
        style={{
          backgroundColor: `${headerColor}`,
          color: `${headerTextColor}`,
        }}
        className="flex flex-col justify-between items-center w-full h-1/6"
      >
        <div className="flex flex-col justify-center text-center font-bold px-5">
          <div className="text-4xl mt-8">{profile.name}</div>
          <div className="text-lg pt-3">{profile.wantedJobTitle}</div>
        </div>
        <div className="flex flex-row px-5">
          <div className="text-md">{profile.phone}</div>
          {profile.email && <span className="mx-2">|</span>}
          <div className="text-md">{profile.email}</div>
          {profile.address && <span className="mx-2">|</span>}
          <div className="text-md">{profile.address}</div>
        </div>
        <div className="flex flex-row px-5">
          <div className="text-md">{profile.linkOne}</div>
          {profile.linkTwo && <span className="mx-2">|</span>}
          <div className="text-md">{profile.linkTwo}</div>
          {profile.linkThree && <span className="mx-2">|</span>}
          <div className="text-md">{profile.linkThree}</div>
        </div>
      </header>
      <section className="flex flex-col font-bold w-full mb-5 px-5">
        <div className="text-md text-gray-dark border-b border-black tracking-widest">
          SKILLS
        </div>
        <div>
          {profile.skills == null
            ? ""
            : profile.skills.split(",").map((skill) => (
                <div
                  className="inline-block px-1 mt-3 mx-1 bg-gray-dark text-sm font-normal"
                  key={skill}
                >
                  {skill}
                </div>
              ))}
        </div>
      </section>
      <section className="flex flex-col font-bold w-full mb-5 px-5">
        <div className="text-md text-gray-dark border-b border-black tracking-widest">
          EXPERIENCE
        </div>
        {[...Array(expCount)].map((e, i) => (
          <div className="flex flex-col" key={`exp${i}`}>
            <div className="flex justify-between">
              <div className="text-sm pt-3 text-gray-dark">
                <li>{experience.jobTitles[`jobTitle${i + 1}`]}</li>
              </div>
              <div>
                <div className="inline-block text-sm pt-3 text-gray-dark font-normal italic">
                  {experience.jobStartDate[`jobStartDate${i + 1}`]} -
                </div>
                <div className="inline-block text-sm pt-3 pl-3 text-gray-dark font-normal italic">
                  {experience.jobEndDate[`jobEndDate${i + 1}`] === undefined
                    ? "Present"
                    : experience.jobEndDate[`jobEndDate${i + 1}`]}
                </div>
              </div>
            </div>
            <div className="text-sm pt-3 text-gray-dark">
              {experience.exp[`exp${i + 1}`]}
            </div>
            <div className="text-sm pt-3 text-gray-dark font-normal">
              {experience.jobDesc[`jobDesc${i + 1}`]}
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col font-bold w-full mb-5 px-5">
        <div className="text-md text-gray-dark border-b border-black tracking-widest">
          PROJECTS
        </div>
        {[...Array(projectCount)].map((e, i) => (
          <div className="flex flex-col" key={`exp${i}`}>
            <div className="flex justify-between">
              <div className="text-sm pt-3 text-gray-dark">
                <li>{project.projectTitles[`projectTitle${i + 1}`]}</li>
              </div>
              <div>
                <div className="inline-block text-sm pt-3 text-gray-dark font-normal italic">
                  {project.projectStartDate[`projectStartDate${i + 1}`]} -
                </div>
                <div className="inline-block text-sm pt-3 pl-3 text-gray-dark font-normal italic">
                  {project.projectEndDate[`projectEndDate${i + 1}`] ===
                  undefined
                    ? "Present"
                    : project.projectEndDate[`projectEndDate${i + 1}`]}
                </div>
              </div>
            </div>
            <div className="text-sm pt-3 text-gray-dark font-normal">
              {project.projectDesc[`projectDesc${i + 1}`]}
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col font-bold w-full mb-5 px-5">
        <div className="text-md text-gray-dark border-b border-black tracking-widest">
          EDUCATION
        </div>
        {[...Array(eduCount)].map((e, i) => (
          <div className="flex flex-col" key={`exp${i}`}>
            <div className="flex justify-between">
              <div className="text-sm pt-3 text-gray-dark">
                <li>{education.qual[`qual${i + 1}`]}</li>
              </div>
              <div>
                <div className="inline-block text-sm pt-3 text-gray-dark font-normal italic">
                  {education.eduStartDate[`eduStartDate${i + 1}`]} -
                </div>
                <div className="inline-block text-sm pt-3 pl-3 text-gray-dark font-normal italic">
                  {education.eduEndDate[`eduEndDate${i + 1}`] === undefined
                    ? "Present"
                    : education.eduEndDate[`eduEndDate${i + 1}`]}
                </div>
              </div>
            </div>
            <div className="text-sm pt-3 text-gray-dark">
              {education.edu[`educ${i + 1}`]}
            </div>
            <div className="text-sm pt-3 text-gray-dark font-normal">
              {education.eduDesc[`eduDesc${i + 1}`]}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Unus;
