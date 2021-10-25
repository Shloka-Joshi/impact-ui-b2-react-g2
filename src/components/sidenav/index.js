import { Link ,useRouteMatch,useParams} from "react-router-dom";
import './sidenav.css';
import Container from '@mui/material/Container';
import TodayIcon from '@mui/icons-material/Today';
import HomeIcon from '@mui/icons-material/Home';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../../styles/common-style.css';

function Sidenav(props) {
    let { id, role } = useParams();

    return (
        <Container className='sidenav'>
            <Grid>
                <Card className='root'>
                    <CardActionArea>
                        <CardMedia
                            className='media'
                            image="/images/user.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                sam
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
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