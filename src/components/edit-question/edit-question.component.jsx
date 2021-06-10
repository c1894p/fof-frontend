import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const EditQuestion = () => {
  const { id } = useParams();
  const { questionID } = useParams();
  const [questionState, setQuestionState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/quizzes/${id}`)
      .then((res) => {
        return res;
      })
      .then((res) => {
        const data = res.data;
        console.log(data.questions);
        setQuestionState(data.questions);
      })
      .catch((e) => {
        console.log("Get req error for quiz data", e);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/quizzes/${id}/${questionID}`, {
        question: e.target.question.value,
        optionA: e.target.optionA.value,
        optionB: e.target.optionB.value,
        optionC: e.target.optionC.value,
        optionD: e.target.optionD.value,
        answer: e.target.answer.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    e.preventDefault()
    const { value, name } = e.target;
    setQuestionState({ [name]: value });
  };

  return (
    <div>
      <h1>EDIT QUESTION</h1>
      {questionState.map((q) => {
        return (
          q._id === questionID && (
            <form onSubmit={handleSubmit} key ={q._id}>
              <label htmlFor="question">Enter Question: </label>
              <input
                type="text"
                name="question"
                value={q.question}
                onChange={handleChange}
                required
              />
              <label htmlFor="optionA">Option A: </label>
              <input
                type="text"
                name="optionA"
                value={q.options.A}
                onChange={handleChange}
                required
              />
              <label htmlFor="optionB">Option B: </label>
              <input
                type="text"
                name="optionB"
                value={q.options.B}
                onChange={handleChange}
                required
              />
              <label htmlFor="optionC">Option C: </label>
              <input
                type="text"
                name="optionC"
                value={q.options.C}
                onChange={handleChange}
                required
              />
              <label htmlFor="optionD">Option D: </label>
              <input
                type="text"
                name="optionD"
                value={q.options.D}
                onChange={handleChange}
                required
              />
              <label htmlFor="answer">Enter Answer: </label>
              <input
                type="text"
                name="answer"
                value={q.answer}
                onChange={handleChange}
                required
              />

              <input type="submit" value="Submit Change" />
            </form>
          )     
        );
      })}
    </div>
  )
};
