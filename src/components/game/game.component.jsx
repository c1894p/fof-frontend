import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Results } from "../results/results.component";

export const Game = () => {
  const { id } = useParams();
  const [quizState, setQuizState] = useState([]);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/quizzes/${id}`)
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
      setCurrentQuestion((currentQuestion += 1))
    } else if (quizState[currentQuestion].answer !== e.target.value){
      console.log("INCORRECT");
      setCurrentQuestion((currentQuestion += 1))
    } else {

    }
  };

  // const handleNextClick = () => {
  //   if (currentQuestion <= quizState.length) {
  //     setCurrentQuestion((currentQuestion += 1));
  //   } else {
  //     console.log("Quiz Finished");
  //   }
  // };


  return (
    <div>
      <h1>Friend or Foe</h1>
      <p>
        Score : {score} / {quizState.length} correct
      </p>

      {quizState.length > 0 && <h2>{quizState[currentQuestion].question}</h2>}
  
      {quizState.map((question) => (
        quizState[currentQuestion].question === question.question &&
          <div key={question._id}>
            <button onClick={handleClick} value={question.options.A}>{question.options.A}</button>
            <button onClick={handleClick} value={question.options.B}>{question.options.B}</button>
            <button onClick={handleClick} value={question.options.C}>{question.options.C}</button>
            <button onClick={handleClick} value={question.options.D}>{question.options.D}</button>
          </div>
        )
      )} 
    <br/>
      {/* <button onClick={handleNextClick}>Next Question</button> */}
    </div>
  );
};
