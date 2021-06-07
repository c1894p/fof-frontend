import "./App.css";
import { Home } from "./pages/home/home.component";
import { Header } from "./components/header/header.component";
import {SignInAndSignUpPage} from "./pages/sign-in and sign-up/sign-in-and-sign-up.component";
import {CreateQuiz} from "./pages/quiz/create-quiz.component"
import {QuestionForm} from "./components/question-form/question-form.component"
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          <Route exact path="/createquiz" component={CreateQuiz} />
          <Route exact path="/createquestion" component={QuestionForm} />
        </Switch>
    </div>
  );
}

export default App;
