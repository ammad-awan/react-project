import React from "react";
import "./FormInput.css";

const FormInput = ({ 
  label, 
  type = "text", 
  placeholder, 
  required = false,
  value,
  onChange,
  name,
  disabled = false,
  error = null,
}) => {
  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        className={`form-input ${error ? "error" : ""}`}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormInput;
