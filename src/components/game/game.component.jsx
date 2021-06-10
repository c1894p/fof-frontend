import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export const Game = () => {
  const { id } = useParams();
  const [quizState, setQuizState] = useState([])

  useEffect(()=>{
      axios.get(`http://localhost:3000/quizzes/${id}`)
      .then(res =>{
          return res
      })
      .then(res =>{
          const data = res.data
          console.log(data.questions)
          setQuizState(data.questions)
      })
      .catch(e =>{
          console.log('Error getting quiz data:', e)
      })
  },[])

  return (
    <div>
      <h1>Friends or Foe</h1>
      {quizState.map(question => {
          return (
              <div key= {question._id}>
                  <h2>{question.question}</h2>
                  <button>{question.options.A}</button>
                  <button>{question.options.B}</button>
                  <button>{question.options.C}</button>
                  <button>{question.options.D}</button>
              </div>
          )
      })}
     
    </div>
  );
};
