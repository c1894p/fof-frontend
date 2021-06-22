import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../quiz-form/quiz-form.styles.css"

export const QuizForm = ({ setQuizDataState }) => {
  const initialState = { author: "", title: "" };
  const [quizState, setQuizState] = useState(initialState);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACK_END_URL}/quizzes`, {
        title: e.target.title.value,
        author: e.target.author.value,
      })
      .then((res) => {
        return res
      })
      .then((res) => {
        const data = res.data;
        console.log(data)
        setQuizDataState(data);
      })
      .catch((err) => console.log(err));

    setQuizState(initialState);
    history.push(`/create/question`);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setQuizState({ [name]: value });
  };

  return (
    <div className ="quiz-form-container">
      <h1 className="quiz-form-header">Friend or Foe</h1>
      <h4 className="quiz-form-subhead">The time has come to create your quiz!</h4>
      <h4 className="quiz-form-subhead">Fill out the form below:</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Enter Username: </label>
        <input
          type="text"
          name="author"
          value={quizState.author}
          onChange={handleChange}
          className="quiz-form-input"
          required
        />
        <label htmlFor="title">Quiz Title: </label>
        <input
          type="text"
          name="title"
          value={quizState.title}
          onChange={handleChange}
          className="quiz-form-input"
          required
        />

        <input className="quiz-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};
