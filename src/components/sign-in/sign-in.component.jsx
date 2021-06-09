import React, { useState } from "react";
import { useHistory } from "react-router-dom"

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
      <span>Sign in with your email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={newUserInfo.username}
          onChange={handleChange}
          required
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={newUserInfo.password}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
