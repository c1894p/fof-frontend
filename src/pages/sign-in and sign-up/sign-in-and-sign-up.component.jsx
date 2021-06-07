import React from "react";

import { SignIn } from "../../components/sign-in/sign-in.component"
import { SignUp } from "../../components/sign-up/sign-up.component"

export const SignInAndSignUpPage = () => {
    return (
      <div className="sign-in-and-sign-up">
        <h1>FoF</h1>
        <SignIn />
        <SignUp />
      </div>
    );
  };

  