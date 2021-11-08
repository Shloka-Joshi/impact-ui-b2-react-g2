import { Link ,useRouteMatch,useParams, useHistory} from "react-router-dom";
import './sidenav.css';
import Container from '@mui/material/Container';
import TodayIcon from '@mui/icons-material/Today';
import HomeIcon from '@mui/icons-material/Home';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Grid from '@material-ui/core/Grid';
import '../../styles/common-style.css';
import Profilecard from "./profile-card";
function Sidenav(props) {
    let history = useHistory();
    let { id, role } = useParams();
    return (
        <Container style={{padding:'10px 0 0'}} className='sidenav'>
            <div>
            <Grid>
            <Profilecard style={{margin:'0 10px'}}  />
            </Grid>
            </div>
            {/* For Admin___________________________________________________________________________________________ */}
            {role== 'admin'? 
            <Container p = {0}>
                <div className='item'>
                    <HomeIcon className='icon' />
                    <h6 className='text'>
                        <Link to={`/dashboard/${id}/${role}`} className='link'>
                            Dashboard</Link></h6>
                </div>
                <div className='item' style={{ fontFamily: 'Nunito' }}>
                    <RecentActorsIcon className='icon' />
                    <h6 className='text'><Link to={`/dashboard/${id}/${role}/Managepatient`} className='link'>Patient </Link></h6>
                </div>
                <div className='item'>
                    <LocalLibraryIcon className='icon' />
                    <h6 className='text'>
                        <Link to={`/dashboard/${id}/${role}/Managephysician`} className='link'>Physician </Link>
                    </h6>
                </div>
                <div className='item'>
                    <TodayIcon className='icon' />
                    <h6 className='text'><Link to={`/dashboard/${id}/${role}/Manageappointment`} className='link'>Appointments</Link></h6>
                </div>
            </Container>
            // For Physician _____________________________________________________________________________________
            : role == 'physician' ? 
            <Container>
                <div className='item'>
                    <HomeIcon className='icon' />
                    <h6 className='text'>
                        <Link to={`/dashboard/${id}/${role}`} className='link'>
                            Dashboard</Link></h6>
                </div>
                <div className='item' style={{ fontFamily: 'Nunito' }}>
                    <RecentActorsIcon className='icon' />
                    <h6 className='text'><Link to={`/dashboard/${id}/${role}/#`} className='link'>Appointments </Link></h6>
                </div>
                <div className='item'>
                    <LocalLibraryIcon className='icon' />
                    <h6 className='text'>
                        <Link to={`/dashboard/${id}/${role}/#`} className='link'>Patient Details </Link>
                    </h6>
                </div>
            </Container>
            // For Patient _________________________________________________________________________________________
            : role == 'patient' ?
            <Container>
            <div className='item'>
                <HomeIcon className='icon' />
                <h6 className='text'>
                    <Link to={`/dashboard/${id}/${role}/#`} className='link'>
                        Dashboard</Link></h6>
            </div>
            <div className='item' style={{ fontFamily: 'Nunito' }}>
                <ScheduleIcon className='icon' />
                <h6 className='text'><Link to={`/dashboard/${id}/${role}/#`} className='link'>New Appointment </Link></h6>
            </div>
            <div className='item'>
                <LocalLibraryIcon className='icon' />
                <h6 className='text'>
                    <Link to={`/dashboard/${id}/${role}/demographics`} className='link'>Demographics </Link>
                </h6>
            </div>
            <div className='item'>
                <TodayIcon className='icon' />
                <h6 className='text'><Link to={`/dashboard/${id}/${role}/vital`} className='link'>Vitals</Link></h6>
            </div>
            <div className='item'>
                <TodayIcon className='icon' />
                <h6 className='text'><Link to={`/dashboard/${id}/${role}/immunization`} className='link'>Immunization</Link></h6>
            </div>
        </Container>
        // Invlid user_________________________________________________________________________________________________
            : "Invalid login"}
        </Container>

    );
}

export default Sidenav;