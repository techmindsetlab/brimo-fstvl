import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  ariaLabel = "button",
  children,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md p-2.5 ${className}`}
    >
      <span className="sr-only">{ariaLabel}</span>
      {children}
    </button>
  );
};

export default Button;
