import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import EyeIcon from "mdi-react/EyeIcon";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";

import { EnhancedToastify } from "../../../components/EnhancedToastify";
import { signUp } from "../../../services/user";

export const SignUpForm: React.FC = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handlePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleSignUp = async () => {
    if (username.length === 0) {
      return EnhancedToastify("warning", "Username is required!");
    }
    if (password.length === 0) {
      return EnhancedToastify("warning", "Password is required!");
    }

    const response = await signUp(username, password);
    const {
      data: { status, message },
    } = response;

    if (status === 200) {
      history.push("/");
      EnhancedToastify("success", message);
    } else {
      EnhancedToastify("warning", message);
    }
  };

  return (
    <form className="form">
      <div className="form__form-group">
        <span className="form__form-group-label">Username</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <AccountOutlineIcon />
          </div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Password</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className={`form__form-group-button${
              showPassword ? " active" : ""
            }`}
            onClick={(e) => handlePassword(e)}
            type="button"
          >
            <EyeIcon />
          </button>
        </div>
      </div>
      <Link
        className="btn btn-primary account__btn account__btn--small"
        to="#"
        onClick={handleSignUp}
      >
        Sign In
      </Link>
      <Link
        className="btn btn-outline-primary account__btn account__btn--small"
        to="/"
      >
        Back
      </Link>
    </form>
  );
};
