import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

import { Topbar } from "./topbar/Topbar";
import { Sidebar } from "./sidebar/Sidebar";

const Layout: React.FC = () => {
  const [sidebarShow, setSideBarShow] = useState(false);
  const [sidebarCollapse, setSidebarCollapse] = useState(false);

  const layoutClass = classNames({
    layout: true,
    "layout--collapse": sidebarCollapse,
  });

  const handleSidebarVisibility = () => {
    setSidebarCollapse((prevState) => !prevState);
  };

  const handleMobileSidebarVisibility = () => {
    setSideBarShow((prevState) => !prevState);
  };

  return (
    <div className={layoutClass}>
      <Topbar
        changeMobileSidebarVisibility={handleMobileSidebarVisibility}
        changeSidebarVisibility={handleSidebarVisibility}
      />
      <Sidebar
        sidebarShow={sidebarShow}
        sidebarCollapse={sidebarCollapse}
        changeMobileSidebarVisibility={handleMobileSidebarVisibility}
      />
    </div>
  );
};

export default withRouter(Layout);
