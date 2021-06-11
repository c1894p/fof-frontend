import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export const EditQuiz = ({getData}) => {
  const history = useHistory();
  const [quizState, setQuizState] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/quizzes/${id}`)
      .then((res) => {
        return res;
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setQuizState(data);
      })
      .catch((e) => {
        console.log("Get req error for quiz data", e);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/quizzes/${id}`, {
        title: e.target.title.value
      })
      .then((res) => {
        console.log(res.data);
        getData()
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));

  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setQuizState({ [name]: value });
  };

if (quizState == null) return null
  return (
    <div>
      <h1>EDIT QUIZ</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Quiz Title: </label>
        <input
          type="text"
          name="title"
          value={quizState.title}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
