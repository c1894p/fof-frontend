import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export const QuizDetail = () => {
  const { id } = useParams();

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/quizzes/${id}`)
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

  return (
    <div>
      <div key={quizData.id}>
        <h1>{quizData.title} </h1>
        <h3>By: {quizData.author}</h3>

        <div>
          <h2>
            Questions - <Link to={`/create/question`}>Add a question</Link>
          </h2>
          {quizData.questions === undefined
            ? null
            : quizData.questions.map((q) => (
                <div key = {q._id}>
                  <p>Q: {q.question} - <Link to={`/dashboard/${id}/${q._id}/editquestion`}>edit</Link></p>
                  <p>A: {q.answer}</p>
                  <p>
                    Options: {q.options.A}, {q.options.B}, {q.options.C},{" "}
                    {q.options.D}
                  </p>
                </div>
              ))}
        </div>
      </div>
      <a href="/dashboard">BACK </a>
    </div>
  );
};
