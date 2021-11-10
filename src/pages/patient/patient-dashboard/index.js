import React,{useEffect} from 'react'
import './body.css';
import { Grid } from '@material-ui/core';
import { Container, CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EventIcon from '@mui/icons-material/Event';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
// import {getAppointments} from '../../../redux/actions/appointments-actions'
import { useDispatch,useSelector } from 'react-redux';

  function Card(props) {
    const dispatch = useDispatch;
    const d = props.appointment ;

    // React.useEffect(()=>{
        
    //     dispatch(getAppointments)
    // },[])


    return (
            <div>
                <Container maxWidth="sm">
                    <CssBaseline/>
                        <Box sx={{display:'flex',flexDirection:"column",alignItems:'center'}}>
                            <Grid container spacing={2}>

                                        <Grid item sm={12} lg={12} md={12} xl={12} xs={12}>
                                            <div className="appointments">
                                            <h2 className='header'>My Appointments</h2>
                                            <div className='icon'><AccessAlarmIcon/><h3 className="">{d?.date}</h3></div>
                                            <h3 className="icon"><EventIcon/>{d?.time}</h3>
                                            <h3 className="icon"><AddModeratorIcon/>{d?.physition}</h3>
                                           </div>     
                                        </Grid>
                                </Grid>
                                </Box>
                                </Container><br/>
                                <Container maxWidth="md">
                                    <Box>
                                        <Grid container spacing={2}>
                                        <Grid item sm={12} lg={12} md={12} xl={12} xs={12}>
                                            <div className="details">
                                            <h2 className='header'>Diagnosis Details</h2>
                                            <h3>Doctor Name : {d?.physition}</h3>
                                            <h3>Disease Description :</h3>
                                           <p>{d?.diseaseDescription}</p>
                                            <h3>Reports : {d?.reports}</h3>
                                           </div>     
                                        </Grid>
                            </Grid>
                        </Box>

                </Container>
        </div>
        
    )
};

export default Card;
