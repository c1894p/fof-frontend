import "./App.css";
import { Home } from "./pages/home/home.component";
import { Header } from "./components/header/header.component";
import {SignInAndSignUpPage} from "./pages/sign-in and sign-up/sign-in-and-sign-up.component";
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
    </div>
  );
}

export default App;
