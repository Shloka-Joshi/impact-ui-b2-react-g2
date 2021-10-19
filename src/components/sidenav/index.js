import { Link } from "react-router-dom";
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
function Sidenav() {
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
            <Container>
                <div className='item'>
                    <HomeIcon className='icon' />
                    <h6 className='text'>
                        <Link to="/" className='link'>
                            Dashboard</Link></h6>
                </div>
                <div className='item' style={{ fontFamily: 'Nunito' }}>
                    <RecentActorsIcon className='icon' />
                    <h6 className='text'><Link to="/Managepatient" className='link'>Patient </Link></h6>
                </div>
                <div className='item'>
                    <LocalLibraryIcon className='icon' />
                    <h6 className='text'>
                        <Link to="/Managephysician" className='link'>Physician </Link>
                    </h6>
                </div>
                <div className='item'>
                    <TodayIcon className='icon' />
                    <h6 className='text'><Link to="/Manageappointment" className='link'>Appointments</Link></h6>
                </div>
            </Container>
        </Container>

    );
}

export default Sidenav;