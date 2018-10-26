import React from "react";
const Input = ({ name, label, value, onChange, errorMessage, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        id={name}
      />
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {/* <small className="form-text text-muted">{errorMessage}</small> */}
    </div>
  );
};

export default Input;
