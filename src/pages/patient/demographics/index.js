import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core';
import {Container} from '../../../utils/mui';
import {Button} from  '../../../utils/mui';
import { Grid } from  '../../../utils/mui';
import {MenuItem} from  '../../../utils/mui';
import { CssBaseline } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect,useSelector ,useDispatch} from "react-redux";
import {adddemographicsdata, getrolespecificuserdata} from "../../../redux/actions/demographics-action-creator";
import { FormControl } from "@mui/material";
import { InputAdornment } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { Switch, Route, useRouteMatch ,useParams,useHistory} from "react-router";
import './demographics.css';
import Select from '@mui/material/Select';

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(6)
    }
}));
    
const style = {position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',
  width: 400,bgcolor: 'background.paper',border: '2px solid #000',boxShadow: 24,p: 4,
};

function PatientDemographics({DemographicsData,adddemographicsdata, getrolespecificuserdata}) 
{
  let { id, role } = useParams();
console.log(id);



  const SubmitDemographicsDetails = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   let body = {};
    for (let entry of data.entries()) {
      body[entry[0]] = entry[1];
    }
    body = {...body,userId: ``,UpdatedDate:new Date()}
    adddemographicsdata(body);
   
  };
  
  const tableData = DemographicsData;
  const [userTableData] = React.useState(tableData);

    const genders = ["Male", "Female","Others"];
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
        <Container component="main" maxWidth="lg" className="contain">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
          <Grid container>
            <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
              <h1 className="title-demographics">Demographics</h1>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container className="section-form" maxWidth='md' overflow="auto">
      <Container className={classes.container} >
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box >
        <Box component="form"  onSubmit={SubmitDemographicsDetails}   sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="firstName" name="firstName" 
                label="First Name"  placeholder='First Name' 
                autoComplete="off" 
                InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="lastName"   placeholder='Last Name'name="lastName" label="Last Name"
                autoComplete="off" 
                InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="dob"  placeholder='Birth Date' name="dob"
                label="Birth Date" type="date" autoComplete="off"    InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                  SelectProps={{
                    MenuProps: {
                      PopoverClasses: {
                        root: classes.customMenuPopover
                      }
                    }
                  }}
                variant="outlined" select id="gender"  placeholder='Gender' name="gender"
                label="Gender" fullWidth   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}
              >
              {genders.map((gender, index) => (
                <MenuItem key={index} value={gender}>
                  {gender}
                </MenuItem>
              ))}
             </TextField>
      </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="ethnicity"  placeholder='Ethnicity' name="ethnicity"
                label="Ethnicity / Race" autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }} /> 
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="education"  placeholder='Patient Education' name="education"
                label="Patient Education" autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="occupation" name="occupation" label="Employment"
                autoComplete="off"   placeholder='Employment'  InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid> 
           


            <Grid item xs={12} sm={6}>
                <TextField
                required fullWidth id="contact"  placeholder='Contact Number'  name="contact"
                label="Contact Number" type="tel"  autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>
           
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="medicalHistory"  placeholder='Medical History' name="medicalHistory"
                label="Medical History" autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="familyMedicalHistory"  placeholder='Family Medical History' name="familyMedicalHistory"
                label="Family Medical History" autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="surgeries" name="surgeries"  placeholder='Surgery' label="Surgery"
                autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="insuranceProvider"  placeholder='Insurance Provider' name="insuranceProvider"
                label=" Insurance Provider"  autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>

            <Grid item xs={12}>
                <TextField
                required fullWidth id="address"  placeholder='Address' name="address" label="Address"
                autoComplete="off"  InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }} />
            </Grid>
              <Grid item xs={12} sm={6}>
          <Button 
                                    styles={{ padding: '0', margin: '30' }} type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
                                    <div className='solid-button'>Submit</div>
                                    </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Button 
          styles={{ padding: '0', margin: '30' }}
          type="button"
          fullWidth
          sx={{ mt: 3, mb: 2 }}>
          <div className='solid-button'>Cancel</div>
          </Button>
            </Grid>
          </Grid>         
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
     </Container>
     </Container>
     </>
  )
}

const mapStateToProps = (rootReducer,state) => {
  return {
      DemographicsData: rootReducer.demographicsdata.DemographicsData,
  };
};
const mapdispatchToProps = (dispatch) => {
  return {
      getrolespecificuserdata: (data) => dispatch(getrolespecificuserdata(data)),
      adddemographicsdata: (data) => dispatch(adddemographicsdata(data)),
    };
};

export default connect(mapStateToProps, mapdispatchToProps)(PatientDemographics);