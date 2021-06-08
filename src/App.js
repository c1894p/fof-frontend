import "./App.css";
import { useState } from "react";
import { Home } from "./pages/home/home.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in and sign-up/sign-in-and-sign-up.component";
import { CreateQuiz } from "./pages/quiz/create-quiz.component";
import { QuestionForm } from "./components/question-form/question-form.component";
import { Switch, Route } from "react-router-dom";

function App() {
  const [quizDataState, setQuizDataState] = useState("");

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
        <Route
          exact
          path="/create"
          render={() => <CreateQuiz setQuizDataState={setQuizDataState} />}
        />
        <Route
          exact
          path="/create/question"
          render={() => <QuestionForm quizDataState={quizDataState} />}
        />
      </Switch>
    </div>
  );
}

export default App;
