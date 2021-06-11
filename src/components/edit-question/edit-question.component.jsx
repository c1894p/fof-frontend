import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export const EditQuestion = ({getData}) => {
  // {formValue, setFormValue}
  const { id } = useParams();
  const { questionID } = useParams();
  const [questionState, setQuestionState] = useState([]);
  const [formValue, setFormValue] = useState("");

  const history = useHistory()

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
      .put(`http://localhost:3000/quizzes/${id}/${questionID}/editquestion`, {
        question: e.target.question.value,
        optionA: e.target.optionA.value,
        optionB: e.target.optionB.value,
        optionC: e.target.optionC.value,
        optionD: e.target.optionD.value,
        answer: e.target.answer.value,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

      getData()
      
      history.push(`/dashboard/${id}`)
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValue({ [name]: value });
  };

  return (
    <div>
      <h1>EDIT QUESTION</h1>
      {questionState.map((q) => {
        return (
          q._id === questionID && (
            <div key={q._id}>
              <h3>Question: {q.question}</h3>
              <h4>Option A: {q.options.A}</h4>
              <h4>Option B: {q.options.B}</h4>
              <h4>Option C: {q.options.C}</h4>
              <h4>Option D: {q.options.D}</h4>
              <h4>Answer: {q.answer}</h4>

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
          )
        );
      })}
    </div>
  );
};
