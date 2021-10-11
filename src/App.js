import { BrowserRouter as Router, Link,Switch,Route } from "react-router-dom";

import "./App.css";
import HomeComponent from "./components/homepage";
import Login from "./components/login";
import Registration from "./components/registration";
import Dashboard from "./shared/dashboard";

function App() {
  return (
<div>
     
      <Router>
      <Switch>
                <Route exact path="/">
                <HomeComponent />
                  </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>

                <Route path="/signup">
                  <Registration />
                </Route>

              </Switch>
            </Router>

      
</div>
  );
}

export default App;
