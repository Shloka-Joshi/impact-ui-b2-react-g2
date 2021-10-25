import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core';
import {Container} from '../../../utils/mui';
import {Button} from  '../../../utils/mui';
import Modal from '@mui/material/Modal';
import { Grid } from  '../../../utils/mui';
import {MenuItem} from  '../../../utils/mui';
import { CssBaseline } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import { setdemographics } from "../../../redux/actions/demographics-action-creator";
import Header from "../header";
import { FormControl } from "@mui/material";
import { InputAdornment } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as RouterLink } from "react-router-dom";
import './demographics.css';
import Footer from "../../../components/footer";
import BasicModal from "../../../components/modals";
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

function PatientDemographics({data, setdemographics,getdemographicdata}) {

 // const id =useRoute();

    const handleSubmit = (event) => {
      event.preventDefault();
      const demographicsdata = new FormData(event.currentTarget);
      let body = {};
      for (let entry of demographicsdata.entries()) {
        body[entry[0]] = entry[1];
      }
    //  let body = {...body,userId: id }
      setdemographics(body);
    };

    // const tableData =data;
    // useEffect(() =>  {
    //   getdemographicdata("demographics");
    // },[]);

    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const genders = ["Male", "Female","Others"];
    const classes = useStyles();

    return (
        <>
        <Container component="main" maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
          <Grid container>
            <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
              <h1 className="title-demographics">Demographics</h1>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container className='section-form' maxWidth='md' overflow="auto">
      <Container className={classes.container} >
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box >
        <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                variant="outlined" select id="patientgender"  placeholder='Gender' name="patientgender"
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
                required fullWidth id="patientethSnicity"  placeholder='Ethnicity' name="patientethnicity"
                label="Ethnicity / Race" autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }} /> 
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="patienteducation"  placeholder='Patient Education' name="patienteducation"
                label="Patient Education" autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="patientemployment" name="patientemployment" label="Employment"
                autoComplete="off"   placeholder='Employment'  InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid> 
           


            <Grid item xs={12} sm={6}>
                <TextField
                required fullWidth id="patientphonenumber"  placeholder='Contact Number'  name="patientphonenumber"
                label="Contact Number" type="tel"  autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>
           
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="patientmedicalhistory"  placeholder='Medical History' name="patientmedicalhistory"
                label="Medical History" autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="patientfamilymedicalhistory"  placeholder='Family Medical History' name="patientfamilymedicalhistory"
                label="Family Medical History" autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="patientsurgery" name="patientsurgery"  placeholder='Surgery' label="Surgery"
                autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="patientinsuranceprovider"  placeholder='Insurance Provider' name="patientinsuranceprovider"
                label=" Insurance Provider"  autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>

            <Grid item xs={12}>
                <TextField
                required fullWidth id="patientaddress"  placeholder='Address' name="patientaddress" label="Address"
                autoComplete="off"  InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }} />
            </Grid>
              <Grid item xs={12} sm={6}>
          {/* <Button onClick={handleOpen} */}
          <Button 
          styles={{ padding: '0', margin: '30' }}
          type="submit"
          fullWidth
          sx={{ mt: 3, mb: 2 }}>
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
    
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          demography
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
        Demography Data Added Successfully
        </Typography>
      </Box>
    </Modal>
  </ThemeProvider>
     </Container>
     </Container>
     </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.demographicsdata,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    setdemographics: (demographicsdata) => dispatch(setdemographics(demographicsdata)),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(PatientDemographics);