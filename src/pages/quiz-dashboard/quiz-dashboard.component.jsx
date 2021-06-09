import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

export const QuizDashboard = ({getData, quizData}) =>{
    
    useEffect(()=>{
        getData()
    }, [])


    return(
        <div>
            <h1>Quiz Dashboard</h1>
            <Link to="/create">
                <button>Create a new Quiz</button>
            </Link>
            {quizData.map(quiz =>{
                return (
                <div key = {quiz.id}>
                    <h2>Title: <Link to ={`/dashboard/${quiz._id}`}>{quiz.title}</Link> - <Link to={`/dashboard/${quiz._id}/editquiz`}>edit</Link></h2>
                    <h3>By: {quiz.author}</h3>
                </div>
                )
            })}
        </div>
    )
}
