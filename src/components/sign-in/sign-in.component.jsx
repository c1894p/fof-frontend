import React, { useState } from "react";
import { useHistory } from "react-router-dom"

import "../sign-in/sign-in.styles.css"

export const SignIn = () => {

  const initialState = { username: "", password: ""};
  const [newUserInfo, setNewUserInfo] = useState(initialState);

  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setNewUserInfo(initialState);
    history.push('/dashboard')
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewUserInfo({ [name]: value });
  };

  return (
    <div>
      <h2>I already have an account</h2>
      <h4>Sign in with your email and password</h4>

      <div className="sign-in">
      <form action="" onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={newUserInfo.username}
          onChange={handleChange}
          className="sign-in-input"
          required
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={newUserInfo.password}
          onChange={handleChange}
          className="sign-in-input"
          required
        />

        <input type="submit" value="Submit" className="sign-in-submit"/>
      </form>
      </div>
    </div>
  );
};
