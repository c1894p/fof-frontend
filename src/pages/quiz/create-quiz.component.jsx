import React from 'react';
import { QuizForm } from '../../components/quiz-form/quiz-form.component'

export const CreateQuiz = ({setQuizDataState}) => {
    return(
        <div>
            <QuizForm setQuizDataState={setQuizDataState}/>
        </div>
    )
}