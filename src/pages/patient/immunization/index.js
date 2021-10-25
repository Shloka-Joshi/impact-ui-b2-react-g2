import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../header';
import SideNav from '../sidenav';
import {Grid ,Container, MenuItem , Button} from '../../../utils/mui';
import Footer from '../../../components/footer';
import './immunization.css';
import '../../../styles/common-style.css';
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";
import { makeStyles } from '@material-ui/core';

import {patientimmunization} from "../../../redux/actions/immunization-action-creator";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(6)
    }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Immunization({patientimmunization ,data}) {

        const SubmitImmunization = (event) => {
          event.preventDefault();
          const immunizationdata = new FormData(event.currentTarget);
          immunizationdata.append("patientId", "2");
          let body = {};
          for (let entry of immunizationdata.entries()) {
            body[entry[0]] = entry[1];
          }
          patientimmunization(body);
        };



  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Vaccine = ["Covid Vaccination Dose - 1 ", "Covid Vaccination Dose - 2"];
  const VaccineName = ["Covishield", "Covaxin"];
  return (
      <>
                <div className="page-container">
                <div className="page-wrapper">
                <Header />
                <Grid container>
                    <Grid item sm={2} xs={2}>
                        <SideNav role="Patient"/>
                    </Grid>
                    
                    <Grid item sm={10} xs={10}>
                    <Container component="main" maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
          <Grid container>
            <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
              <h1 className="title-immunization">Immunization Details</h1>
            </Grid>
          </Grid>
        </Box>
      </Container>
                         <Container component="main" maxWidth="lg">
                    <Box  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
                    <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
                            {/* <Box sx={{ borderBottom: 1, borderColor: 'var(--card-bg-color1)' }}> */}
                            <Box>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Covid - 19 Vaccination Details" {...a11yProps(0)} />
                                <Tab label="Other Vaccination Details" {...a11yProps(1)} />
                                {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                                </Tabs>
                            </Box>
                            </Grid>
                         
                            <TabPanel value={value} index={0}>
                            <Box component="form" onSubmit={SubmitImmunization} sx={{ mt: 3 }}sm={12}>
                                <Box  sx={{ mt: 3 }}sm={12}>
                                    <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            SelectProps={{
                                                MenuProps: {
                                                    PopoverClasses: {
                                                    root: classes.customMenuPopover
                                                                    }
                                                            }
                                                        }}
                                                    variant="outlined" select id="Vaccine" name="Vaccine" placeholder='Vaccine Dose' 
                                                    label="Vaccine Dose" fullWidth   InputProps={{
                                                        startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                                    }}
                                                >
                                                {Vaccine.map((Vaccine, index) => (
                                                    <MenuItem key={index} value={Vaccine}>
                                                    {Vaccine}
                                                    </MenuItem>
                                                ))}
                                                </TextField>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <TextField
                                            SelectProps={{
                                                MenuProps: {
                                                    PopoverClasses: {
                                                    root: classes.customMenuPopover
                                                                    }
                                                            }
                                                        }}
                                                    variant="outlined" select id="VaccineName"  placeholder='Vaccine Name' name="VaccineName"
                                                    label="Vaccine Name" fullWidth   InputProps={{
                                                        startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                                    }}
                                                >
                                                {VaccineName.map((VaccineName, index) => (
                                                    <MenuItem key={index} value={VaccineName}>
                                                    {VaccineName}
                                                    </MenuItem>
                                                ))}
                                                </TextField>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth id="vaccinatedon" name="vaccinatedon" 
                                            label="When to give"  placeholder='When to give'
                                            autoComplete="off" 
                                            InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        />
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{ mt: 3 }}sm={12}>
                                    <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            SelectProps={{
                                                MenuProps: {
                                                    PopoverClasses: {
                                                    root: classes.customMenuPopover
                                                                    }
                                                            }
                                                        }}
                                                    variant="outlined" select id="vaccine" name="vaccine" placeholder='Vaccine Dose'
                                                    label="Vaccine Dose" fullWidth   InputProps={{
                                                        startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                                    }}
                                                >
                                                {Vaccine.map((Vaccine, index) => (
                                                    <MenuItem key={index} value={Vaccine}>
                                                    {Vaccine}
                                                    </MenuItem>
                                                ))}
                                                </TextField>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <TextField
                                            SelectProps={{
                                                MenuProps: {
                                                    PopoverClasses: {
                                                    root: classes.customMenuPopover
                                                                    }
                                                            }
                                                        }}
                                                    variant="outlined" select id="vaccinename"  placeholder='Vaccine Name' name="vaccinename"
                                                    label="Vaccine Name" fullWidth   InputProps={{
                                                        startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                                    }}
                                                >
                                                {VaccineName.map((vaccinename, index) => (
                                                    <MenuItem key={index} value={vaccinename}>
                                                    {vaccinename}
                                                    </MenuItem>
                                                ))}
                                                </TextField>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <TextField
                                          fullWidth id="vaccinatedOn" name="vaccinatedOn" 
                                            label="When to give"  placeholder='When to give'
                                            autoComplete="off" 
                                            InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        />
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Grid item sm={4}>
                                    {/* <Button onClick={handleOpen} */}
                                    <Button 
                                    styles={{ padding: '0', margin: '30' }}
                                    type="submit"
                                    fullWidth
                                    sx={{ mt: 3, mb: 2 }}>
                                    <div className='solid-button'>Submit</div>
                                    </Button>
                                    </Grid>
                            </Box>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Item Two
                            </TabPanel>
                            {/* <TabPanel value={value} index={2}>
                                Item Three
                            </TabPanel> */}
                            </Box>
                            </Container>
                    </Grid>
                    
                    </Grid>
                </div>
            </div>
            <div >
            <Footer/>
            </div>
            
                </>
 );
}

const mapStateToProps = (state) => {
  return {
    immunizationdata: state.immunizationdata,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    patientimmunization: (immunizationdata) => dispatch(patientimmunization(immunizationdata)),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(Immunization);