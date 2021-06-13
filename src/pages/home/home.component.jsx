import React from 'react';
import {Link} from 'react-router-dom'

import "../home/home.styles.css"

export const Home = () => {
    return(
        <div className="container">
            <h1 className="home-title">Friend or Foe</h1>
            <div className="home-subtext">
            <h3>How well do your friends know you?</h3>
            <h3>FoF is a way for you to quiz your friends about yourself to see who is a friend versus who is a foe!</h3>
            </div>
        
            <Link to="/signin">
            <button className="start-btn">Get Started</button>
            </Link>
        </div>
    )
}