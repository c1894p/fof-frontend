import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export const EditQuestion = ({ getData }) => {
  // {formValue, setFormValue}
  const { id } = useParams();
  const { questionID } = useParams();
  const [formValue, setFormValue] = useState({});

  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK_END_URL}/quizzes/${id}/${questionID}`)
      .then((res) => {
        return res;
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setFormValue(
          { question: data.question, 
            answer: data.answer,
            optionA: data.options.A,
            optionB: data.options.B,
            optionC: data.options.C,
            optionD: data.options.D
          }
          );
      })
      .catch((e) => {
        console.log("Get req error for quiz data", e);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `${process.env.REACT_APP_BACK_END_URL}/quizzes/${id}/${questionID}/editquestion`,
        {
          question: e.target.question.value,
          optionA: e.target.optionA.value,
          optionB: e.target.optionB.value,
          optionC: e.target.optionC.value,
          optionD: e.target.optionD.value,
          answer: e.target.answer.value,
        }
      )
      .then((res) => {
        console.log(res.data);
        getData();
        history.push(`/dashboard/${id}`);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValue({ [name]: value });
  };

  return (
    <div>
      <h1>EDIT QUESTION</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Question: </label>
        <input
          type="text"
          name="question"
          value={formValue.question}
          onChange={handleChange}
          required
        />
        <label htmlFor="optionA">Option A: </label>
        <input
          type="text"
          name="optionA"
          value={formValue.optionA}
          onChange={handleChange}
          required
        />
        <label htmlFor="optionB">Option B: </label>
        <input
          type="text"
          name="optionB"
          value={formValue.optionB}
          onChange={handleChange}
          required
        />
        <label htmlFor="optionC">Option C: </label>
        <input
          type="text"
          name="optionC"
          value={formValue.optionC}
          onChange={handleChange}
          required
        />
        <label htmlFor="optionD">Option D: </label>
        <input
          type="text"
          name="optionD"
          value={formValue.optionD}
          onChange={handleChange}
          required
        />
        <label htmlFor="answer">Enter Answer: </label>
        <input
          type="text"
          name="answer"
          value={formValue.answer}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Submit Change" />
      </form>
    </div>
  );
};
