import React from "react";

import { LogInForm } from "./components/LogInForm";

export const SignIn: React.FC = () => {
  return (
    <div className="account">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">Sign In</h3>
          </div>
          <LogInForm />
        </div>
      </div>
    </div>
  );
};
