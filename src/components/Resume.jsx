import React from "react";
import Duo from "./resume_templates/Duo";
import Unus from "./resume_templates/Unus";

// Resume (on the right side of the build page)
//Live previews the data inputted in the form (left side)
const Resume = ({
  type,
  userData,
  expData,
  expCount,
  eduData,
  eduCount,
  projectData,
  projectCount,
  headerColor,
  headerTextColor,
}) => {
  return (
    <>
      <div className="resume-container">
        {type === "unus" ? (
          /* FIRST TEMPLATE: Unus */
          <Unus
            profile={userData}
            experience={expData}
            expCount={expCount}
            education={eduData}
            eduCount={eduCount}
            project={projectData}
            projectCount={projectCount}
            headerColor={headerColor}
            headerTextColor={headerTextColor}
          />
        ) : (
          /* SECOND TEMPLATE: Duo*/
          <Duo
            profile={userData}
            experience={expData}
            expCount={expCount}
            education={eduData}
            eduCount={eduCount}
            project={projectData}
            projectCount={projectCount}
            headerColor={headerColor}
            headerTextColor={headerTextColor}
          />
        )}
      </div>
    </>
  );
};

export default Resume;
