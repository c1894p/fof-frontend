import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"

import "../sign-up/sign-up.styles.css"

export const SignUp = () => {
  const initialState = {username: "", email: "", password: "", confirmPassword:""}
  const [newUserState, setNewUserState] = useState(initialState);


  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${process.env.REACT_APP_BACK_END_URL}/users`, {
      username: e.target.username.value,
      email:e.target.email.value,
      password: e.target.password.value
  })
    .then(res =>console.log(res.data))
    .catch(err => console.log(err))

    setNewUserState(initialState)

    history.push('/create')
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewUserState({ [name]: value })
  };


  return (
    <div>
      <h2>I don't have an account</h2>
      <h4>Sign up with your email and password</h4>

      <div className="sign-up">
      <form onSubmit={handleSubmit} >
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={newUserState.username}
          onChange={handleChange}
          className="sign-up-input"
          required
        />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={newUserState.email}
          onChange={handleChange}
          className="sign-up-input"
          required
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={newUserState.password}
          onChange={handleChange}
          className="sign-up-input"
          required
        />
        <label>Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          value={newUserState.confirmPassword}
          onChange={handleChange}
          className="sign-up-input"
          required
        />

          <input type="submit" value="Submit" className="sign-up-submit"/>
      </form>
      </div>
    </div>
  );
};
