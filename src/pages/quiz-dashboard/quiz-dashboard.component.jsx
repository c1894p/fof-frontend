import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../quiz-dashboard/quiz-dashboard.styles.css"

export const QuizDashboard = ({ getData, quizData }) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className = "dashboard-container">
      <h1 className="dashboard-header">Quiz Dashboard</h1>
      <Link to="/create">
        <button className="create-btn">Create a new Quiz</button>
      </Link>
      {quizData.map((quiz) => {
        return (
          <div key={quiz._id} className="dashboard-content">
            <h2 className="dashboard-title">
              Title: <Link to={`/dashboard/${quiz._id}`}>{quiz.title}</Link> -{" "}
              <Link to={`/dashboard/${quiz._id}/editquiz`}>edit</Link>
            </h2>
            <h3 className="dashboard-author">By: {quiz.author}</h3>
            <Link to={`/game/${quiz._id}/${quiz.author}/share`} >
              <button className="share-btn">Share Quiz</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
