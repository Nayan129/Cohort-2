import React from "react";

const FormGroup = ({ label, placeHolder, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        id={label}
        name={label}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default FormGroup;
