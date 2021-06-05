import React from "react";
import { TopbarSidebarButton } from "./TopbarSidebarButton";
import { TopbarProfile } from "./TopbarProfile";

interface Props {
  changeMobileSidebarVisibility: () => void;
  changeSidebarVisibility: () => void;
}

export const Topbar: React.FC<Props> = ({
  changeMobileSidebarVisibility,
  changeSidebarVisibility,
}) => {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__left">
          <TopbarSidebarButton
            changeMobileSidebarVisibility={changeMobileSidebarVisibility}
            changeSidebarVisibility={changeSidebarVisibility}
          />
        </div>
        <div className="topbar__right">
          <TopbarProfile />
        </div>
      </div>
    </div>
  );
};
