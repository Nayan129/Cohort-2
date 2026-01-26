import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = () => {
  return (
    <MacWindow>
      <div className="resume-window">
        <embed src="/NAYAN_BHUSARI_RESUME.pdf" frameborder="0"></embed>
      </div>
    </MacWindow>
  );
};

export default Resume;
