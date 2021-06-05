import React from "react";
import { SidebarLink } from "./SidebarLink";

interface Props {
  onClick: () => void;
}

export const SidebarContent: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="sidebar__content">
      <SidebarLink
        title="Dashboard"
        icon="home"
        route="/dashboard"
        onClick={onClick}
      />
    </div>
  );
};
