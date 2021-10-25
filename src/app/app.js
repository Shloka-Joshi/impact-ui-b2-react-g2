import HomePage from "../pages/home/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "../pages/register";
import Login from "../pages/login";
// import EventCalendar from "../components/event-calendr";
// import EventCalendar from "../components/event-calendr";
import ScheduleAppointment from "../pages/patient/schedular";
import EventCalendar from "../components/my-own-stuff/event-calendr";
import Dashboard from "../pages/admin/dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/" component={EventCalendar} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        {/* <Route exact path="/" component={ScheduleAppointment} /> */}


        <Route path="/dashboard/:id/:role" component={Dashboard} />
      </Switch>
     </Router>
  );
}

export default App;
