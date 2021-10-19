import HomePage from "../pages/home/index";
import Header from '../components/header/index';
import Dashboard from "../pages/admin/dashboard";
// import Grid from '@material-ui/core/Grid';
import Sidenav from "../components/sidenav";
import ShellComponent from "../components/dashboard-body";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Footer from "../components/footer";
function App() {
  return (

    <>
      <Dashboard />
    </>
  );
}

export default App;
