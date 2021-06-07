import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"

export const SignUp = () => {
  const initialState = {username: "", email: "", password: "", confirmPassword:""}
  const [newUserState, setNewUserState] = useState(initialState);


  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/users", {
      username: e.target.username.value,
      email:e.target.email.value,
      password: e.target.password.value
  })
    .then(res =>console.log(res))
    .catch(err => console.log(err))

    setNewUserState(initialState)

    history.push('/createquiz')

    console.log(e)
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewUserState({ [name]: value })
  };


  return (
    <div>
      <h2>I don't have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit} >
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={newUserState.username}
          onChange={handleChange}
          required
        />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={newUserState.email}
          onChange={handleChange}
          required
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={newUserState.password}
          onChange={handleChange}
          required
        />
        <label>Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          value={newUserState.confirmPassword}
          onChange={handleChange}
          required
        />

          <input type="submit" value="Submit" />

      </form>
    </div>
  );
};
