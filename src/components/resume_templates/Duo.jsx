import React from "react";

//SECOND TEMPLATE: DUO
const Duo = ({
  headerTextColor,
  headerColor,
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
    >
      <header
        style={{ color: `${headerTextColor}` }}
        className="flex flex-col justify-center items-start font-sans w-full h-1/6"
      >
        <div className="bg-gray-100 h-1/6 w-1/4"></div>
        <div
          style={{ backgroundColor: `${headerColor}` }}
          className="flex flex-col items-start justify-center px-5 h-5/6 w-full"
        >
          <div className="text-4xl font-bold">{profile.name}</div>
          <div className="text-lg pt-3">{profile.wantedJobTitle}</div>
        </div>
      </header>
      <div className="flex h-5/6 font-sans">
        <div className="bg-gray-100 w-1/4 mt-0.5">
          <section className="flex flex-col divide-y divide-black w-full mb-5 px-5 pt-3">
            <div className="text-md text-black tracking-widest font-bold mb-2">
              SKILLS
            </div>
            <div className="border-b border-black"></div>
            <div>
              {profile.skills == null
                ? ""
                : profile.skills.split(",").map((skill) => (
                    <div
                      className="inline-block px-2 py-2 mt-3 mx-1 text-center bg-black text-sm text-white items-center justify-center"
                      key={skill}
                    >
                      {skill}
                    </div>
                  ))}
            </div>
          </section>
          <div className="flex flex-col px-5">
            <div className="text-md text-black tracking-widest font-bold mb-2">
              CONTACT
            </div>
            <div className="border-b border-black"></div>
            <div className="text-sm pt-3 break-all">
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
                  strokeWidth={1}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>{" "}
              {profile.phone}
            </div>
            <div className="text-sm pt-3 break-all">
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
                  strokeWidth={1}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>{" "}
              {profile.email}
            </div>
            <div className="text-sm pt-3 break-all">
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
                  strokeWidth={1}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>{" "}
              {profile.address}
            </div>
            <div className="text-sm pt-3 break-all">
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
                  strokeWidth={1}
                  d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                />
              </svg>{" "}
              {profile.linkOne} <div className="ml-6"> {profile.linkTwo}</div>
              <div className="ml-6"> {profile.linkThree}</div>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <section className="flex flex-col text-black w-full mb-5 px-5">
            <div className="text-md text-black tracking-widest font-bold mt-5 mb-2">
              PROFESSIONAL EXPERIENCE
            </div>
            <div className="border-b border-black"></div>
            {[...Array(expCount)].map((e, i) => (
              <div className="flex flex-col" key={`exp${i}`}>
                <div className="flex justify-between">
                  <div className="text-sm pt-3 text-black">
                    <li>{experience.jobTitles[`jobTitle${i + 1}`]}</li>
                  </div>
                  <div>
                    <div className="inline-block text-sm pt-3 text-black italic">
                      {experience.jobStartDate[`jobStartDate${i + 1}`]} -
                    </div>
                    <div className="inline-block text-sm pt-3 pl-3 text-black italic">
                      {experience.jobEndDate[`jobEndDate${i + 1}`] === undefined
                        ? "Present"
                        : experience.jobEndDate[`jobEndDate${i + 1}`]}
                    </div>
                  </div>
                </div>
                <div className="text-sm pt-3 text-black">
                  {experience.exp[`exp${i + 1}`]}
                </div>
                <div className="text-sm pt-3 text-black">
                  {experience.jobDesc[`jobDesc${i + 1}`]}
                </div>
              </div>
            ))}
          </section>
          <section className="flex flex-col text-black w-full mb-5 px-5">
            <div className="text-md text-black tracking-widest font-bold mb-2">
              PROJECTS
            </div>
            <div className="border-b border-black"></div>
            {[...Array(projectCount)].map((e, i) => (
              <div className="flex flex-col" key={`exp${i}`}>
                <div className="flex justify-between">
                  <div className="text-sm pt-3 text-black">
                    <li>{project.projectTitles[`projectTitle${i + 1}`]}</li>
                  </div>
                  <div>
                    <div className="inline-block text-sm pt-3 text-black italic">
                      {project.projectStartDate[`projectStartDate${i + 1}`]} -
                    </div>
                    <div className="inline-block text-sm pt-3 pl-3 text-black italic">
                      {project.projectEndDate[`projectEndDate${i + 1}`] ===
                      undefined
                        ? "Present"
                        : project.projectEndDate[`projectEndDate${i + 1}`]}
                    </div>
                  </div>
                </div>
                <div className="text-sm pt-3 text-black">
                  {project.projectDesc[`projectDesc${i + 1}`]}
                </div>
              </div>
            ))}
          </section>
          <section className="flex flex-col text-black w-full mb-5 px-5">
            <div className="text-md text-black tracking-widest font-bold mb-2">
              EDUCATION
            </div>
            <div className="border-b border-black"></div>
            {[...Array(eduCount)].map((e, i) => (
              <div className="flex flex-col" key={`exp${i}`}>
                <div className="flex justify-between">
                  <div className="text-sm pt-3 text-black">
                    <li>{education.qual[`qual${i + 1}`]}</li>
                  </div>
                  <div>
                    <div className="inline-block text-sm pt-3 text-black italic">
                      {education.eduStartDate[`eduStartDate${i + 1}`]} -
                    </div>
                    <div className="inline-block text-sm pt-3 pl-3 text-black italic">
                      {education.eduEndDate[`eduEndDate${i + 1}`] === undefined
                        ? "Present"
                        : education.eduEndDate[`eduEndDate${i + 1}`]}
                    </div>
                  </div>
                </div>
                <div className="text-sm pt-3 text-black">
                  {education.edu[`educ${i + 1}`]}
                </div>
                <div className="text-sm pt-3 text-black">
                  {education.eduDesc[`eduDesc${i + 1}`]}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Duo;
