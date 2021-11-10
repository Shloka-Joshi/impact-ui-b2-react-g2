import React, {useEffect, Component } from 'react';
import '../../../styles/common-style.css';
import { getdiagnosisreportsdata } from '../../../redux/actions/diagnosis-reports-action-creator';
import { useDispatch,useSelector } from 'react-redux';
import {useParams} from "react-router";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import './vital.css';
import {Container} from '../../../utils/mui';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FavoriteIcon from '@mui/icons-material/Favorite';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AttributionIcon from '@mui/icons-material/Attribution';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { green } from '@mui/material/colors';


const bodytemperature = `Your Body Temperature :- `;
const bloodpressure = ` Your Blood Pressure :-  `;
const pulserate = ` Your Pulse Rate :- `;
const respiration = ` Your Respiratory Rate:-  `;


const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
    }
   
}));
function Patientvital(props) {
  
    const dispatch  =useDispatch()
    let {id}= useParams ();
    
    const diagnosis = useSelector((state) => state.diagnosisreportsdata);
    const [vitals, setvitals] = React.useState()
    useEffect(()=>{
        dispatch(getdiagnosisreportsdata(id));
           },[]);

    useEffect(()=>{
        if(diagnosis?.diagnosisreportsData?.length > 0 ){
            console.log(vitals)
            setvitals(diagnosis?.diagnosisreportsData?.[0].patientVitals);
        }
    },[diagnosis])
    console.log ("vitals",vitals);
    const user = useSelector((state) => state.auth);
    console.log("user",user);

const classes = useStyles();
return (
    <>
  <Container component="main" maxWidth="lg" className="contain">
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
      <Grid container>
        <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
          <h2 className="header-title" style={{margin:'0'}}>Vital Details</h2>
        </Grid>
      </Grid>
    </Box>
  </Container>
  <Container component="main" maxWidth="md" className="inside-page-cards" style={{marginTop:'16px'}}>
    <Box sx={{ flexGrow: 1,  flexWrap: 'wrap', overflow: 'hidden', px: 3  , display: 'flex',}}  className={classes.container} >
       <Paper   className={classes.Paper} sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}} className="section-form" >
        <Grid container wrap="nowrap" spacing={4} >
          <Grid item>
            <Avatar><DeviceThermostatIcon/></Avatar>
          </Grid>
          <Grid item xs>
          <Typography style={{color: 'var(--list-icon-color)',fontWeight: "bold",textDecoration: "underline"}}>
            {bodytemperature} {vitals?.temperature }</Typography>
             <Typography>Body Temperature  :- 
              The average normal body temperature is generally accepted as 98.6°F (37°C).</Typography> 
        
        </Grid>
      </Grid>
    </Paper>
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
        <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar><BloodtypeIcon/></Avatar>
        </Grid>
        <Grid item xs>
        <Typography style={{color: 'var(--list-icon-color)',fontWeight: "bold",textDecoration: "underline"}}>{bloodpressure}{vitals?.bloodPressure }</Typography>
        <Typography>Blood Pressure :- A normal blood pressure level is less than 120/80 mmHg . </Typography>
             </Grid>
      </Grid>
    </Paper>
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }} style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar><FavoriteIcon/></Avatar>
        </Grid>
        <Grid item xs>
        <Typography  style={{color: 'var(--list-icon-color)',fontWeight: "bold",textDecoration: "underline"}}>{pulserate} {vitals?.pulseRate }</Typography>
        <Typography>Pulse Rate :- The normal pulse for healthy adults ranges from 60 to 100 beats per minute.
        </Typography>
         </Grid>
      </Grid>
    </Paper>
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }} style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
      <Grid container wrap="nowrap" spacing={4}>
        <Grid item>
          <Avatar><AttributionIcon/></Avatar>
        </Grid>
        <Grid item xs>
        <Typography  style={{color: 'var(--list-icon-color)',fontWeight: "bold",textDecoration: "underline"}}>{respiration} {vitals?.respiration }</Typography>
      
        <Typography>Respiratory rate :-
            The normal respiration rate for an adult at rest is 12 to 20 breaths per minute.
         A respiration rate under 12 or over 25 breaths per minute while resting is considered abnormal.
        </Typography>
          </Grid>
      </Grid>
    </Paper>
  </Box>
  </Container>

  </>
);
}

export default Patientvital;