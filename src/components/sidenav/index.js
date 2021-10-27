import { Link ,useRouteMatch,useParams} from "react-router-dom";
import './sidenav.css';
import Container from '@mui/material/Container';
import TodayIcon from '@mui/icons-material/Today';
import HomeIcon from '@mui/icons-material/Home';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Grid from '@material-ui/core/Grid';
import '../../styles/common-style.css';
import Profilecard from "./profile-card";
const profilrcardDetails = {
    fname: "Sam",
    lname: "Kamal",
    role: "Admin",
   Weight:"80KG",
   Height:"170CM",
   BloodPressure:"120/80"
};

function Sidenav(props) {
    let { id, role } = useParams();

    return (
        <Container className='sidenav'>
            <div>
            <Grid>
            <Profilecard cardData={profilrcardDetails} />
            </Grid>
            </div>
            {/* For Admin___________________________________________________________________________________________ */}
            {role== 'admin'? 
            <Container>
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
                    <h6 className='text'><Link to={`/dashboard/${id}/${role}/#`} className='link'>View All Appointments </Link></h6>
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
                    <Link to={`/dashboard/${id}/${role}`} className='link'>
                        Dashboard</Link></h6>
            </div>
            <div className='item' style={{ fontFamily: 'Nunito' }}>
                <RecentActorsIcon className='icon' />
                <h6 className='text'><Link to={`/dashboard/${id}/${role}/#`} className='link'>Schedule Appointment </Link></h6>
            </div>
            <div className='item'>
                <LocalLibraryIcon className='icon' />
                <h6 className='text'>
                    <Link to={`/dashboard/${id}/${role}/#`} className='link'>Demographics </Link>
                </h6>
            </div>
            <div className='item'>
                <TodayIcon className='icon' />
                <h6 className='text'><Link to={`/dashboard/${id}/${role}/#`} className='link'>Vitals</Link></h6>
            </div>
            <div className='item'>
                <TodayIcon className='icon' />
                <h6 className='text'><Link to={`/dashboard/${id}/${role}/#`} className='link'>Immunization</Link></h6>
            </div>
        </Container>
        // Invlid user_________________________________________________________________________________________________
            : "Invalid login"}
        </Container>

    );
}

export default Sidenav;