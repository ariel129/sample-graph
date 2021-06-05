import React from "react";
import { SignUpForm } from "./components/SignUpForm";

export const SignUp: React.FC = () => {
  return (
    <div className="account">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">Sign Up</h3>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
