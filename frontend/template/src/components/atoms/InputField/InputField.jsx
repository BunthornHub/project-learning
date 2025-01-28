import React from "react";

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded-md p-2 w-full ${className}`}
    />
  );
};

export default InputField;
