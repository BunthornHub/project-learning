import React from "react";

const Label = ({ htmlFor, Children }) => {
  return (
    <label htmlFor={htmlFor} className="">
      {Children}
    </label>
  );
};

export default Label;
