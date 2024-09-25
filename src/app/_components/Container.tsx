import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<SectionProps> = ({
  children,
  className = "",
  style = {},
}) => {
  return (
    <div className={`${className}`} style={style}>
      {children}
    </div>
  );
};

export default Container;
