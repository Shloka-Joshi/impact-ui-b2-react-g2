import React from "react";
import Container from '@mui/material/Container';
import CardComponent from '../sidenav/profile-card';
import Button from '@mui/material/Button';
import { Switch, Route, useRouteMatch ,useParams} from "react-router";
import './dashboard-body.css';
import { Suspense, lazy } from 'react';

const Managepatient = lazy (() => import('../../pages/admin/managepatient'));
const Managephysician = lazy (() => import('../../pages/admin/managephysician'));
const Manageappointment = lazy (() => import('../../pages/admin/manageappointments'));
const ScheduleAppointment = lazy (() => import('../../pages/patient/schedular'));


function ShellComponent(props) {

    let { path } = useRouteMatch();
    let { id, role } = useParams();
    return (
        <Container className='container'>
            {/* _______________________________Admin routes____________________________________________________________ */}
            {role == 'admin' ?
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path={`/dashboard/:id/:role/Manageappointments`}>
                            <Manageappointment />
                        </Route>
                        <Route path={`/dashboard/:id/:role/Managephysician`} component={Managephysician} />
                        <Route path={`/dashboard/:id/:role/ManagePatient`}>
                            <Managepatient />
                        </Route>
                        <Route exact path={`/dashboard/:id/:role`}>
                            {/* admin dashboard */}
                        </Route>
                    </Switch>
                </Suspense>
                //_______________________________Physician Routes_______________________________________________________________________________ */}
                : role == 'physician' ? 
                <Switch>
                    <Route path={`/dashboard/:id}/:role/#`} component={'#'}></Route>
                    <Route path={`/dashboard/:id}/:role/#`} component={'#'}></Route>
                    <Route path={`/dashboard/:id}/:role/#`} component={'#'}></Route>
                    <Route path={`/dashboard/:id}/:role/#`} component={'#'}></Route>
                </Switch> 
                //________________________________Patient Routes_________________________________________________________________*/}

                : role == 'patient' ?
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path={`/dashboard/:id/:role/#`} component={'#'}></Route>
                        <Route path={`/dashboard/:id/:role/ScheduleNewAppointment`}>
                            <ScheduleAppointment/>
                        </Route>
                        <Route path={`/dashboard/:id/:role/#`} component={'#'}></Route>
                        <Route path={`/dashboard/:id/:role/#`} component={'#'}></Route>
                        <Route path={`/dashboard/:id/:role/#`} component={'#'}></Route>
                    </Switch>
                    </Suspense>
                    : 'Not found'}
        </Container>
    )
}

export default ShellComponent;