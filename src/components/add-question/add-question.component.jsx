import React, {useState} from 'react';
import axios from "axios";
import { useParams, Link } from 'react-router-dom';

export const AddQuestion = () =>{

    const {id} = useParams()

    const initialState = {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
      };
    
      const [newQuestionState, setNewQuestionState] = useState(initialState);

      const handleSubmit = (e) => {
        e.preventDefault();
    
        axios
          .post(`${process.env.REACT_APP_BACK_END_URL}/quizzes/${id}/questions`, 
          {
            question: e.target.question.value,
            optionA: e.target.optionA.value,
            optionB: e.target.optionB.value,
            optionC: e.target.optionC.value,
            optionD: e.target.optionD.value,
            answer: e.target.answer.value,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
    
        setNewQuestionState(initialState);
        alert("New question has been added!")
      };
    
      const handleChange = (e) => {
        const { value, name } = e.target;
        setNewQuestionState({ [name]: value });
      };
    return (
        <div>
            <div className= "question-form-container">
      <h1 className= "question-form-header">Friend or Foe</h1>
      <h4 className= "question-form-subhead">
        Add a new question to your quiz. Once you are done, click FINISH!
      </h4>
      <h4 className= "question-form-subhead">Fill out the form below:</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Enter Question: </label>
        <input
          type="text"
          name="question"
          value={newQuestionState.question}
          onChange={handleChange}
          className="question-form-input"
          required
        />
        <label htmlFor="optionA">Option A: </label>
        <input
          type="text"
          name="optionA"
          value={newQuestionState.optionA}
          onChange={handleChange}
          className="question-form-input"
          required
        />
        <label htmlFor="optionB">Option B: </label>
        <input
          type="text"
          name="optionB"
          value={newQuestionState.optionB}
          onChange={handleChange}
          className="question-form-input"
          required
        />
        <label htmlFor="optionC">Option C: </label>
        <input
          type="text"
          name="optionC"
          value={newQuestionState.optionC}
          onChange={handleChange}
          className="question-form-input"
          required
        />
        <label htmlFor="optionD">Option D: </label>
        <input
          type="text"
          name="optionD"
          value={newQuestionState.optionD}
          onChange={handleChange}
          className="question-form-input"
          required
        />
        <label htmlFor="answer">Enter Answer: </label>
        <input
          type="text"
          name="answer"
          value={newQuestionState.answer}
          onChange={handleChange}
          className="question-form-input"
          required
        />

        <input className="question-form-submit" type="submit" value="Add Question" />
      </form>

      <Link to={`/dashboard/${id}`}>
          <button className="finish-btn">FINISH</button>
      </Link>
    </div>
        </div>
    )
}