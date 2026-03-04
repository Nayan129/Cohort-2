import React from "react";

const FormGroup = ({ label, placeHolder }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} name={label} placeholder={placeHolder} />
    </div>
  );
};

export default FormGroup;
