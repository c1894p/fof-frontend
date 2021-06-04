import React, { useState } from "react";

export const SignIn = () => {

  const initialState = { username: "", email: "", password: ""};
  const [newUserInfo, setNewUserInfo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewUserInfo(initialState);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewUserInfo({ [name]: value });
  };

  return (
    <div>
      <h2>I already an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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
