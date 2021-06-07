import axios from "axios";
import React, { useState } from "react";

export const QuestionForm = () => {
  const initialState = {
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
  };
  const [questionState, setQuestionState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3000/quizzes/60be886a42eb97ac0a95074b/questions",
        {
          question: e.target.question.value,
          optionA: e.target.optionA.value,
          optionB: e.target.optionB.value,
          optionC: e.target.optionC.value,
          optionD: e.target.optionD.value,
          answer: e.target.answer.value,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setQuestionState(initialState);
  };

    const handleChange = (e) => {
    const { value, name } = e.target;
    setQuestionState({ [name]: value });
  };

  return (
    <div>
      <h1>FoF</h1>
      <p>
        Great! Now that you have created your quiz, it's time to add some
        questions!
      </p>
      <p>Fill out the form below:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Enter Question: </label>
        <input
          type="text"
          name="question"
          value={questionState.question}
          onChange={handleChange}
          required
        />
        <label htmlFor="optionA">Option A: </label>
        <input
          type="text"
          name="optionA"
          value={questionState.optionA}
          onChange={handleChange}
          required
        />
        <label htmlFor="optionB">Option B: </label>
        <input
          type="text"
          name="optionB"
          value={questionState.optionB}
          onChange={handleChange}
          required
        />
        <label htmlFor="optionC">Option C: </label>
        <input
          type="text"
          name="optionC"
          value={questionState.optionC}
          onChange={handleChange}
          required
        />
        <label htmlFor="optionD">Option D: </label>
        <input
          type="text"
          name="optionD"
          value={questionState.optionD}
          onChange={handleChange}
          required
        />
        <label htmlFor="answer">Enter Answer: </label>
        <input
          type="text"
          name="answer"
          value={questionState.answer}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
