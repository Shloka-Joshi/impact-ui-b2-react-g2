import React from "react";
import Container from '@mui/material/Container';
import CardComponent from '../sidenav/profile-card';
import Button from '@mui/material/Button';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Managepatient from '../../pages/admin/managepatient';
import Managephysician from '../../pages/admin/managephysician';
import Manageappointment from '../../pages/admin/manageappointments';
import './dashboard-body.css'
function ShellComponent(props) {
    
    let jsx =
        <React.Fragment>
            <Button variant="contained" color="secondary" size="medium">Cancel</Button>
        </React.Fragment>
    return (
        <Container className='container'>

            <Router>
                <Switch>
                    <Route path="/Manageappointments">
                        <Manageappointment />
                    </Route>
                    <Route  path="/Managephysician">
                        <Managephysician />
                    </Route>
                    <Route  path="/ManagePatient">
                        <Managepatient />
                    </Route>
                    <Route  path="/">
                        <CardComponent title="HOME">
                            <h1>Welcome to the Patient Management Portal</h1>
                        </CardComponent>

                        <CardComponent title="PATIENT LIST" actionbuttons={jsx}>
                            <h2>Patient List</h2>
                        </CardComponent>
                    </Route>
                </Switch>
            </Router>
           
        </Container>
    )
}

export default ShellComponent;