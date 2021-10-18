import HomePage from "../pages/home/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "../pages/register";
import Login from "../pages/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
