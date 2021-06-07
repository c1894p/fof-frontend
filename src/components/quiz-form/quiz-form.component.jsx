import axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom";


export const QuizForm = () => {
    const initialState = {author:"", title: ""}
    const [quizState, setQuizState] = useState(initialState)

    let history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:3000/quizzes", {
            title: e.target.title.value,
            question: e.target.question.value,
        })
        .then(res =>console.log(res))
        .catch(err => console.log(err))

        setQuizState(initialState);

        history.push("/createquestion")
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setQuizState({ [name]: value })
      };

  return (
    <div>
      <h1>FoF</h1>
      <p>The time has come to create your quiz!</p>
      <p>Fill out the form below:</p>
      <form onSubmit ={handleSubmit}>
        <label htmlFor="author">Enter Username: </label>
        <input
          type="text"
          name="author"
          value= {quizState.title}
          onChange={handleChange}
          required 
        />
        <label htmlFor="title">Quiz Title: </label>
        <input
          type="text"
          name="title"
          value= {quizState.title}
          onChange={handleChange}
          required 
        />

        <input type="submit" value="Submit" />

      </form>
    </div>
  )
};
