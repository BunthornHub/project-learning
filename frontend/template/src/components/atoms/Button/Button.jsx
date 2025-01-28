import React from "react";
import PropTypes from "prop-types";

const Button = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex align-ite justify-center items-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.element,
};

export default Button;
