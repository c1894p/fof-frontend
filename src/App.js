import "./App.css";
import { useState } from "react";
import axios from 'axios';
import { Home } from "./pages/home/home.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in and sign-up/sign-in-and-sign-up.component";
import { CreateQuiz } from "./pages/create-quiz/create-quiz.component";
import { QuizDashboard } from "./pages/quiz-dashboard/quiz-dashboard.component"
import { QuestionForm } from "./components/question-form/question-form.component";
import { QuizDetail} from "./components/quiz-detail/quiz-detail.component"
import{ EditQuiz} from "./components/edit-quiz/edit-quiz.component"
import{EditQuestion} from "./components/edit-question/edit-question.component"
import{ShareQuiz} from "./pages/share-quiz/share-quiz.component"
import {PlayerScreen} from "./pages/player-screen/player-screen.component"
import{Game} from "./components/game/game.component"

import { Switch, Route } from "react-router-dom";

function App() {
  const [quizDataState, setQuizDataState] = useState("");
  const [quizData, setQuizData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:3000/quizzes")
    .then(res =>{
        return res
    })
    .then(res =>{
        const data = res.data
        console.log(data)
        setQuizData(data)
    })
    .catch(e =>{
        console.log("Get req error for quiz data", e)
    })
}

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
        <Route
          exact path="/create"
          render={() => <CreateQuiz setQuizDataState={setQuizDataState} />}
        />
        <Route
          exact path="/create/question"
          render={() => <QuestionForm quizDataState={quizDataState} />}
        />
         <Route
          exact path="/dashboard/:id/:questionID/editquestion"
          render={() => <EditQuestion getData={getData}/>}
        />
        <Route
          exact path="/dashboard/:id/editquiz"
          render={() => <EditQuiz getData={getData} />}
        />
         <Route
          exact path="/dashboard"
          render={() => <QuizDashboard getData={getData} quizData={quizData} setQuizDta={setQuizData}/>}
        />
        <Route exact path ="/dashboard/:id" render={() => <QuizDetail/>}/>
        <Route exact path ="/game/:id/:username/share" render={()=> <ShareQuiz />}/>
        <Route exact path = "/game/:id/:username/welcome" render={()=> <PlayerScreen/>}/>
        <Route exact path = "/game/:id/play" render={()=> <Game /> }/>

      </Switch>
    </div>
  );
}

export default App;
