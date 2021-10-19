import React from "react";
import Container from '@mui/material/Container';
import CardComponent from '../sidenav/profile-card';
import Button from '@mui/material/Button';
import { Switch, Route ,useRouteMatch } from "react-router";
import Managepatient from '../../pages/admin/managepatient';
import Managephysician from '../../pages/admin/managephysician';
import Manageappointment from '../../pages/admin/manageappointments';
import './dashboard-body.css'
function ShellComponent(props) {

    let { path, url } = useRouteMatch();
    return (
        <Container className='container'>
                <Switch>
                    <Route path={`${path}/Manageappointments`}>
                        <Manageappointment />
                    </Route>
                    <Route path={`${path}/Managephysician`} component={Managephysician} />
                        {/* <Managephysician /> */}
                    {/* </Route> */}
                    <Route path='/dashboard/ManagePatient'>
                        <Managepatient />
                    </Route>
                    <Route exact path='/dashboard/main'>
                        {/* <CardComponent title="HOME">
            <h1>Welcome to the Patient Management Portal</h1>
          </CardComponent>

          <CardComponent title="PATIENT LIST">
            <h2>Patient List</h2> */}
                        {/* </CardComponent> */}
                    </Route>
                </Switch>
        </Container>
    )
}

export default ShellComponent;