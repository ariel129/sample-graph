import React from "react";

interface Props {
  children: React.ReactNode;
}

export const MainWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="theme-light">
      <div className="wrapper">{children}</div>
    </div>
  );
};
