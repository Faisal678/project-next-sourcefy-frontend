// components/shared/Button.tsx

import React from "react";
import "./button.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: any;
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  disabled,
  children,
  className = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
