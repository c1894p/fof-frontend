import React from 'react';
import {Link} from 'react-router-dom'

export const Home = () => {
    return(
        <div>
            <h1>Friend of Foe</h1>
            <h3>How well do your friends know you?</h3>
            <h3>FoF is a way for you to quiz your friends about yourself to see who is a friend versus who is a foe!</h3>

        
            <Link to="/signin">
            <button>Get Started</button>
            </Link>
        </div>
    )
}