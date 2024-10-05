import React from "react";
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
      {/* FIRST TEMPLATE: Unus */}
      {type === "unus" ? (
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
      ) : null}
      {/* template 2 under development/wip */}
    </>
  );
};

export default Resume;
