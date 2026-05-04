import React from "react";
import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  ...props
}) => {
  const classList = `btn btn-${variant} btn-${size} ${fullWidth ? "full-width" : ""} ${className}`;

  return (
    <button
      className={classList}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
