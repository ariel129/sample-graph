import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  icon: string;
  route: string;
  onClick: () => void;
}

export const SidebarLink: React.FC<Props> = ({
  title,
  icon,
  route,
  onClick,
}) => {
  return (
    <NavLink
      to={route}
      onClick={onClick}
      activeClassName="sidebar__link-active"
    >
      <li className="sidebar__link">
        {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ""}
        <p className="sidebar__link-title">{title}</p>
      </li>
    </NavLink>
  );
};
