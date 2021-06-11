import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const ShareQuiz = () =>{
    const {id} = useParams()
    const {username} = useParams()

    return(
        <div>
            <h1>FOF</h1>
            <p>Now that you have created a quiz, it's time to share with your friends!</p>

            Copy Link - <Link to ={`/game/${id}/${username}/welcome`}>
            {`http://localhost:3001/game/${id}/${username}/welcome`}
            </Link> 

            <br/>
            <br/>

            <Link to= "/dashboard">
                <button>Back</button>
            </Link>
        </div>
    )
}