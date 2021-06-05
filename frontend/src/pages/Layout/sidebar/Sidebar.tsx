import React from "react";
import classNames from "classnames";
import Scrollbar from "react-smooth-scrollbar";

import { SidebarContent } from "./SidebarContent";

interface Props {
  sidebarShow: boolean;
  sidebarCollapse: boolean;
  changeMobileSidebarVisibility: () => void;
}

export const Sidebar: React.FC<Props> = ({
  sidebarShow,
  sidebarCollapse,
  changeMobileSidebarVisibility,
}) => {
  const sidebarClass = classNames({
    sidebar: true,
    "sidebar--show": sidebarShow,
    "sidebar--collapse": sidebarCollapse,
  });

  return (
    <div className={sidebarClass}>
      <button
        type="button"
        className="sidebar__back"
        onClick={changeMobileSidebarVisibility}
      />
      <Scrollbar className="sidebar__scroll scroll">
        <div className="sidebar__wrapper sidebar__wrapper--desktop">
          <SidebarContent onClick={() => {}} />
        </div>
        <div className="sidebar__wrapper sidebar__wrapper--mobile">
          <SidebarContent onClick={changeMobileSidebarVisibility} />
        </div>
      </Scrollbar>
    </div>
  );
};
