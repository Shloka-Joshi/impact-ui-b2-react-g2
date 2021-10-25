// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

// export default function PatientVital() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           m: 1,
//           width: 160,
//           height: 128,
//         },
//       }}
//     >
//       <Paper/>
//       <Paper />
//       <Paper elevation={3} />
//     </Box>
//   );
// }


import * as React from 'react';
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


const bodytemperature = `Your Body Temperature is -> 97`;
const bloodpressure = ` Your Blood Pressure. `;
const pulserate = ` Your Pulse Rate. `;
const respiration = ` Your Respiratory Rate. `;


const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
    }
   
}));
export default function PatientVital() {
    const classes = useStyles();
  return (
      <>
    <Container component="main" maxWidth="lg">
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
      <Grid container>
        <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
          <h1 className="title-vital">Vital Details</h1>
        </Grid>
      </Grid>
    </Box>
  </Container>
    <Box sx={{ flexGrow: 1,  flexWrap: 'wrap', overflow: 'hidden', px: 3  , display: 'flex',}}  className={classes.container} >
       <Paper   className={classes.Paper} sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
        <Grid container wrap="nowrap" spacing={4} >
          <Grid item>
            <Avatar><DeviceThermostatIcon/></Avatar>
          </Grid>
          <Grid item xs>
               <Typography>Body Temperature  :- 
The average normal body temperature is generally accepted as 98.6°F (37°C).</Typography> 
            <Typography>{bodytemperature}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><BloodtypeIcon/></Avatar>
          </Grid>
          <Grid item xs>
          <Typography>Blood Pressure :- A normal blood pressure level is less than 120/80 mmHg . </Typography>
               <Typography>{bloodpressure}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }} style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><FavoriteIcon/></Avatar>
          </Grid>
          <Grid item xs>
          <Typography>Pulse Rate :- The normal pulse for healthy adults ranges from 60 to 100 beats per minute.
          </Typography>
            <Typography>{pulserate}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }} style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
        <Grid container wrap="nowrap" spacing={4}>
          <Grid item>
            <Avatar><AttributionIcon/></Avatar>
          </Grid>
          <Grid item xs>
          <Typography>Respiratory rate :-
              The normal respiration rate for an adult at rest is 12 to 20 breaths per minute.
           A respiration rate under 12 or over 25 breaths per minute while resting is considered abnormal.
          </Typography>
            <Typography>{respiration}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
    </>
  );
}
