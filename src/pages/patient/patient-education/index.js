import React, {useEffect, Component } from 'react';
import '../../../styles/common-style.css';
import { useDispatch,useSelector } from 'react-redux';
import {useParams} from "react-router";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import './education.css';
import {Container} from '../../../utils/mui';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FavoriteIcon from '@mui/icons-material/Favorite';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AttributionIcon from '@mui/icons-material/Attribution';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { green } from '@mui/material/colors';

import ReactPlayer from "react-player";


const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
    }
   
}));
function Patienteducation(props) {
  
    const dispatch  =useDispatch()
    let {id}= useParams ();
    const classes = useStyles();

return (
    <>
  <Container component="main" maxWidth="lg" className="contain">
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
      <Grid container>
        <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
          <h2 className="header-title" style={{margin:'0'}}>Patient Education Details</h2>
        </Grid>
      </Grid>
    </Box>
  </Container>
  <Container component="main" maxWidth="md" className="inside-page-cards" style={{marginTop:'16px'}}>
    <Box sx={{ flexGrow: 1,  flexWrap: 'wrap', overflow: 'hidden', px: 3  , display: 'flex',}}  className={classes.container} >
       <Paper   className={classes.Paper} sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}} className="section-form" >
        <Grid container wrap="nowrap" spacing={2} >
          <Grid item xs>
          <iframe src="https://www.youtube.com/embed/qWti317qb_w" 
          title="Understanding Blood Pressure" 
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen></iframe>
        </Grid>
      </Grid>
    </Paper>
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
        <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs>
        <iframe src="https://www.youtube.com/embed/vJhsyS4lTW0" 
          title="Temperature Regulation Of The Human Body" 
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen></iframe>
        </Grid>
      </Grid>
    </Paper>
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
        <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs>
        <iframe src="https://www.youtube.com/embed/EhfOZMOF9W4"
          title="Healthy Eating for Kids" 
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen></iframe>
        </Grid>
      </Grid>
    </Paper>
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }} style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs>
        <iframe src="https://www.youtube.com/embed/a6ppbe_wYA0"
          title="Mental Health Awareness Video" 
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen></iframe>
         </Grid>
      </Grid>
    </Paper>
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }} style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs>
        <iframe src="https://www.youtube.com/embed/DLmmN0jy-s0" 
          title="Heartbeat and Pulse" 
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen></iframe>
         </Grid>
      </Grid>
    </Paper>
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }} style={{backgroundColor:'var(--card-bg-color1)',color: 'var(--button-text-color)'}}  >
      <Grid container wrap="nowrap" spacing={4}>
        <Grid item xs>
        <iframe src="https://www.youtube.com/embed/Xr-Bucc2J38" 
          title="Heartbeat and Pulse" 
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen></iframe>
          </Grid>
      </Grid>
    </Paper>
  </Box>
  </Container>

  </>
);
}

export default Patienteducation;