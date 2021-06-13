import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../game/game.styles.css"

export const Game = () => {
  const { id } = useParams();
  const [quizState, setQuizState] = useState([]);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK_END_URL}/quizzes/${id}`)
      .then((res) => {
        return res;
      })
      .then((res) => {
        const data = res.data;
        console.log(data.questions);
        setQuizState(data.questions);
      })
      .catch((e) => {
        console.log("Error getting quiz data:", e);
      });
  }, []);

  const handleClick = (e) => {
    console.log(e);
    console.log(e.target);
    if (quizState[currentQuestion].answer === e.target.value) {
      console.log("CORRECT");
      setScore((score += 1));
      setCurrentQuestion((currentQuestion += 1));
    } else {
      console.log("INCORRECT");
      setCurrentQuestion((currentQuestion += 1));
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-header">Friend or Foe</h1>
      <p className="game-score">
        Score : {score} / {quizState.length} correct
      </p>

      {currentQuestion < quizState.length  ? (
        <div className="game-content">
          {quizState.length > 0 && (
            <h2 className="game-question" >{quizState[currentQuestion].question}</h2>
          )}
          {quizState.map(
            (question) =>
              quizState[currentQuestion].question === question.question && (
                <div key={question._id}>
                  <button onClick={handleClick} value={question.options.A} className="game-options">
                    {question.options.A}
                  </button>
                  <button onClick={handleClick} value={question.options.B} className="game-options">
                    {question.options.B}
                  </button>
                  <button onClick={handleClick} value={question.options.C} className="game-options">
                    {question.options.C}
                  </button>
                  <button onClick={handleClick} value={question.options.D} className="game-options">
                    {question.options.D}
                  </button>
                </div>
              )
          )}
        </div>
      ) : (
        <h1 className="game-over">GAME OVER</h1> 
        // {score} > quizState.length/2 ? (<h2>You are a friend!</h2>) : (<h2>You are a foe!</h2>)
      )}
    </div>
  );
};
