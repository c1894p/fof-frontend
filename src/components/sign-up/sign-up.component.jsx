import React, { useState } from "react";
import axios from "axios";

export const SignUp = () => {
  const initialState = {username: "", email: "", password: "", confirmPassword:""}
  const [newUserInfo, setNewUserInfo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = newUserInfo;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    const { username, email } = newUserInfo

    axios
    .post("http://localhost:8000/fof/users/", {username, email})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setNewUserInfo(initialState)
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewUserInfo({ [name]: value });
  };

  return (
    <div>
      <h2>I don't have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={newUserInfo.username}
          onChange={handleChange}
          required
        />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={newUserInfo.email}
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
        <label>Confirm Password: </label>
        <input
          type="password"
          name="confirm password"
          value={newUserInfo.confirmPassword}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
