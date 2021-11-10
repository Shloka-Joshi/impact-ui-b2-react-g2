import React from "react";
import { Box } from "@mui/system";
import Container from '@mui/material/Container';
import './body.css'
import { Grid,Button, CssBaseline } from "@material-ui/core";
import CheckIcon from '@mui/icons-material/Check';
import { Card, CardContent } from "@mui/material";
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import { makeStyles } from "@material-ui/core";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import {Link} from 'react-router-dom';
import { Modal } from "@mui/material";
import '../../../styles/common-style.css'
const buttonStyle = makeStyles({
    button: {
      backgroundColor: 'var(--solid-button-color)',
      color: 'var(--button-text-color)',
      margin:'10px 0 0',boxShadow:'none',
      fontFamily:'Nunito',textTransform:'none',fontWeight:'700',border:'2px solid var(--solid-button-color)',
      '&:hover': {
    border:'2px solid var(--button-text-color)',backgroundColor: 'var(--solid-button-color)'
        
    },

  }})

 
function HomeBody(){
    const classes = buttonStyle()
    return(
        <>
       <div className='first-row' >       
      
       <Container component="main" maxWidth="lg">
          <CssBaseline/>
          <Box sx={{ display: "flex", flexDirection: "column",alignItems: "center",}}>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={7} md={6}  >
                  <div className="col-left">
                            <div>
                                <h2>We Take Care Of</h2>
                                <h1 className="heading-para" >Your Health</h1>
                                <p>A patient portal is a website for your personal health care. The online tool helps you to keep track of your health care provider visits, test results, prescriptions, and so on.<br />Taking good care of yourself is paramount to success of your recovery process.
                                <br />
                                Advanced health management portal to address the health disparities that underlie our health system.
                                You can access all of your personal health information from all of your providers in one place. </p>
                            <h3 className="sub-heading">Track and analyze all your data in one central location.</h3>
                            <ul>
                                <li><CheckIcon style={{color:'var(--list-icon-color)', paddingRight:'5px' }}/> Demographics  </li>
                                <li><CheckIcon style={{color:'var(--list-icon-color)', paddingRight:'5px' }}/> Medication </li>
                                <li><CheckIcon style={{color:'var(--list-icon-color)', paddingRight:'5px' }}/> Vitals  </li>
                            </ul>
                            <Link to='/login' style={{textDecoration:'none'}}>
                            <Button className={classes.button} variant="contained" >
                                Get Appointment
                            </Button>
                            </Link>
                            </div>
                        </div>
                  </Grid>
                  <Grid item xs={12} lg={5} md={6}>
                  <div className="col-right"></div>
                  </Grid>
                </Grid>
          </Box>
        </Container>
      </div> 
      <div className="second-row">
              <Container component="main" maxWidth="lg">
              <Box sx={{ display: "flex", flexDirection: "column",alignItems: "center",}}> 
                  <Grid item lg={12} sm={12} xs={12} container spacing={0} style={{margin:'0 auto'}}>
                    <Grid item xs={12} sm={6} lg={4} md={4} xl={4}>
                <div  className="card-data">
                    <Card style={{borderRadius:'0',boxShadow:'0',backgroundColor:'var(--card-bg-color1)'}} >
                        <CardContent className="card">
                            <span className="cardIcons"><AccessTimeIcon style={{fontSize:'3rem'}}/></span> <br/>    
                            <h2>Accessible 24x7</h2>
                            <p>
                                Round the clock access to a specialist reduces wait times and delivers dedicated higher quality care. An accessible doctor also improves patient and family satisfaction due to better and more frequent communication
                            </p>
                        </CardContent>
                    </Card>
                </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} md={4} xl={4}>
                <div  className="card-data">
                    <Card style={{borderRadius:'0',boxShadow:'0',backgroundColor:'var(--card-bg-color2)'}}>
                        <CardContent className="card">
                        <span className="cardIcons"><AppRegistrationTwoToneIcon style={{fontSize:'3rem'}}/></span>   
                            <h2>Book an Appointment</h2>
                            <p>
                                Register yourself to experience a seemless medicare solution,
                                Patients can book appointments online, cancel or reschedule.<br /> Doctors can be notified  take actions.
                                pre-scheduled, walk-ins and online appointments
                            </p>
                        </CardContent>
                    </Card>
                </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} md={4} xl={4}>
                    <div  className="card-data">
                        <Card style={{borderRadius:'0',boxShadow:'0',backgroundColor:'var(--card-bg-color1)'}}>
                        <CardContent className="card">
                        <span className="cardIcons"><PermPhoneMsgIcon style={{fontSize:'3rem'}}/></span> <br/>    
                            <h2>Contact Us</h2>
                            <p>
                                Phone Number:987-654-3210
                                <br/>
                                Landline:0321-987-9999
                                <br/>
                                -----
                                <br/>
                                Mail:patientportal@portal.com
                                <br/>
                                Fax:123-456-7890

                            </p>
                        </CardContent>
                    </Card>
                    </div>
                </Grid>
              </Grid>
              </Box>
          </Container>
          </div>
      </>
    );
}

export default HomeBody;