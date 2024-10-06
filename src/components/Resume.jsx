import React from "react";
import Duo from "./templates/Duo";
import Unus from "./templates/Unus";

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
    </>
  );
};

export default Resume;
