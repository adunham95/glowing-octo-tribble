import React from "react";
import { DarkMode } from "../Utilities/DarkMode";

interface IProps {
  children: React.ReactChild;
  useHeader: boolean;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="container mx-auto">
      <DarkMode />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
