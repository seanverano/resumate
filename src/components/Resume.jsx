import React from "react";
import Unus from "./templates/Unus.jsx";

const Resume = ({
  type,
  userData,
  empData,
  empCount,
  eduData,
  eduCount,
  projectData,
  projectCount,
  headerColor,
  headerTextColor,
}) => {
  return (
    <>
      {type === "Unus" ? (
        <Unus
          profile={userData}
          experience={empData}
          empCount={empCount}
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
