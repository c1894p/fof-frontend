import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Game = () => {
  const { id } = useParams();
  const [quizState, setQuizState] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
    if(quizState[currentQuestion].answer === e.target.value){
        console.log("CORRECT")
    } else{
        console.log("INCORRECT")
    }
  }

  return (
    <div>
      <h1>Friend or Foe</h1>
      
      {quizState.map((question) => {
        return (
          <div key={question._id}>
            <h2>{question.question}</h2>
            <button onClick={handleClick} value={question.options.A}>{question.options.A}</button>
            <button onClick={handleClick} value={question.options.B}>{question.options.B}</button>
            <button onClick={handleClick} value={question.options.C}>{question.options.C}</button>
            <button onClick={handleClick} value={question.options.D}>{question.options.D}</button>
          </div>
        );
      })}
    </div>
  );
};
