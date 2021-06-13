import React from "react";

import { SignIn } from "../../components/sign-in/sign-in.component"
import { SignUp } from "../../components/sign-up/sign-up.component"

import "../sign-in and sign-up/sign-in-and-sign-up.styles.css"

export const SignInAndSignUpPage = () => {
    return (
      <div className="sign-in-and-sign-up">
        <h1 className="sign-in-and-sign-up-header">Friend or Foe</h1>
        <SignIn />
        <SignUp />
      </div>
    );
  };

  