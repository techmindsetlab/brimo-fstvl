import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Paragraph: React.FC<SectionProps> = ({
  children,
  className = "",
  style = {},
}) => {
  return (
    <p className={`${className}`} style={style}>
      {children}
    </p>
  );
};

export default Paragraph;
