import React, { useContext, useState } from "react";
import { Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import DownIcon from "mdi-react/ChevronDownIcon";
import { Context } from "../../../context/Context";

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

export const TopbarProfile: React.FC = () => {
  const { dispatch } = useContext(Context);
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };

  const handleSignOut = () => {
    dispatch({
      type: "LOGOUT_STATE",
      id: "",
      username: "",
      accessToken: "",
      authenticated: false,
    });
  };

  return (
    <div className="topbar__profile">
      <button type="button" className="topbar__avatar" onClick={toggle}>
        <img className="topbar__avatar-img" src={Ava} alt="avatar" />
        <p className="topbar__avatar-name">Ariel</p>
        <DownIcon className="topbar__icon" />
      </button>
      {collapse && (
        <button type="button" className="topbar__back" onClick={toggle} />
      )}
      <Collapse isOpen={collapse} className="topbar__menu-wrap">
        <div className="topbar__menu">
          <Link className="topbar__link" to="/" onClick={handleSignOut}>
            <span className={`topbar__link-icon lnr lnr-exit`} />
            <p className="topbar__link-title">Log Out</p>
          </Link>
        </div>
      </Collapse>
    </div>
  );
};
