import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

import "../quiz-detail/quiz-detail.styles.css"

export const QuizDetail = ({getData}) => {
  const { id } = useParams();

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK_END_URL}/quizzes/${id}`)
      .then((res) => {
        return res;
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setQuizData(data);
      })
      .catch((e) => {
        console.log("Get req error for quiz data", e);
      });
  }, []);

  const history = useHistory()

  const deleteQuiz= () => {
    axios
    .delete(`${process.env.REACT_APP_BACK_END_URL}/quizzes/${id}`)
    .then((res) =>{
      console.log('quiz deleted', res)
    })
    .catch((e) => {
      console.log("Get req error for quiz data", e);
    });
    getData()
    history.push("/dashboard")
  }

  return (
    <div className="quiz-detail-container">
        <h1 className="quiz-title">{quizData.title} </h1>
        <h3 className="quiz-author">By: {quizData.author}</h3>
        <button onClick={deleteQuiz} className="quiz-delete-btn">Delete Quiz</button>

        <div>
          <h2 className="quiz-question-title">
            Questions:
            {/* - <Link to={`/create/question`}>Add a question</Link> */}
          </h2>
          {quizData.questions === undefined
            ? null
            : quizData.questions.map((q) => (
                <div key = {q._id} className="quiz-content">
                  <p>Q: {q.question} ?- <Link to={`/dashboard/${id}/${q._id}/editquestion`}>edit</Link></p>
                  <p>
                    Options: {q.options.A}, {q.options.B}, {q.options.C},{" "}
                    {q.options.D}
                  </p>
                  <p>A: {q.answer}</p>
                </div>
              ))}
        </div>
     
      <Link to = "/dashboard">
        <button className="quiz-detail-back-btn">Back</button>
      </Link>
    </div>
  );
};
