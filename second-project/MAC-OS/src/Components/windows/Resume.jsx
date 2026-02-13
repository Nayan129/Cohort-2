import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({ windowName, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="resume-window">
        <embed src="/NAYAN_BHUSARI_RESUME.pdf" frameborder="0"></embed>
      </div>
    </MacWindow>
  );
};

export default Resume;
