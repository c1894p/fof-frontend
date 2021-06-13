import React from 'react';
import { useParams, Link } from 'react-router-dom';

import "../share-quiz/share-quiz.styles.css"

export const ShareQuiz = () =>{
    const {id} = useParams()
    const {username} = useParams()

    return(
        <div className="share-container">
            <h1 className="share-header">Friend or Foe</h1>
            <h2 className="share-subhead">Now that you have created a quiz, it's time to share with your friends!</h2>

            <span className="copy">Copy Link - <Link to ={`/game/${id}/${username}/welcome`}>
            {`${process.env.REACT_APP_BACK_END_URL}/${id}/${username}/welcome`}
            </Link> </span>

            <br/>
            <br/>

            <Link to= "/dashboard">
                <button className="back-btn">Back</button>
            </Link>
        </div>
    )
}