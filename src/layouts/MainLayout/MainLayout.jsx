import React from "react";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
