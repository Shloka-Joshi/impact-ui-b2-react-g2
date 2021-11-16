import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Container, MenuItem, Button } from '../../../utils/mui';
import './immunization.css';
import '../../../styles/common-style.css';
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";
import { makeStyles } from '@material-ui/core';
import { Switch, Route, useRouteMatch, useParams, useHistory } from "react-router";
import { PatientImmunizationData, getimmunizationdata, addimmunizationdata, updateimmunizationdata } from "../../../redux/actions/common-action-creator";
import { connect, useDispatch, useSelector } from "react-redux";
import BasicModal from "../../../components/modals";
import * as Yup from 'yup';
import { useFormik } from 'formik';

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

function Immunization({ImmunizationData,PatientImmunizationData,addimmunizationdata,updateexistingphysicianrecord}) {
            let { id, role } = useParams();
            const dispatch  =useDispatch()
            const SubmitImmunization = (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            let body = {};
            for (let entry of data.entries()) {
              body[entry[0]] = entry[1];
            }
            body = JSON.stringify({ userId:id, covid: {...body,UpdatedDate:new Date()}})
            addimmunizationdata(body);
            handleOpen();
          };
  
          const [open, setOpen] = React.useState(false);
          const handleOpen = () => setOpen(true);
          const handleClose = () => {
          setOpen(false);
          };

          const SubmitVaccineDetails = (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            let  body = { };
            for (let entry of data.entries()) {
              body[entry[0]] = entry[1];
            }
            body = JSON.stringify({ userId:id, others: {...body,UpdatedDate:new Date()} })
            addimmunizationdata(body);
            handleOpen();
          };

  const Vaccine = ["Covid Vaccination Dose - 1 ", "Covid Vaccination Dose - 2"];
  const VaccineName = ["Covishield", "Covaxin"];
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const [immunizationformdata, setimmunizationformdata] = React.useState(ImmunizationData);
  const [addFormValue,setFormValue] = React.useState({});
    useEffect(()=>{
        dispatch(getimmunizationdata(id));
    },[]);

    const handleChange = (e,newValue) => {
    const { id, value } = e.target;
    setValue(newValue);
    setFormValue(prevState => ({
        formdata: { ...prevState, [id]: value }
    }));
    };

    useEffect(()=>{
    getimmunizationdata(id);
        if(immunizationformdata?.length>0){
        setFormValue(prevState => ({
            ...prevState,...immunizationformdata[0].covid
        }))
        }
    },[immunizationformdata])

  const [vaccinedata, setvaccinedata] = React.useState(ImmunizationData)
  const [othervaccine, setvaccine] = React.useState({})

  useEffect(()=>{
      if(vaccinedata?.length > 0 ){
          setvaccine(vaccinedata?.[1].others);
      }
  },[vaccinedata])

    return (
        <>
            <div className="page-container">
                <div className="page-wrapper">
              
                <Grid container >                 
                    <Grid item sm={12} xs={12}>
                    <Container component="main" maxWidth="lg" className="contain">
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
                          <Grid container>
                            <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
                              <h2 className="header-title" style={{margin:'0'}}> Immunization Details</h2>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                         <Container component="main" maxWidth="md" style={{marginTop:'15px'}} className="inside-page-cards">
                    <Box  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
                        <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
                            <Box>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Covid - 19 Vaccination Details" {...a11yProps(0)} />
                                <Tab label="Other Vaccination Details" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                        </Grid>
                      
                                    <TabPanel value={value} index={0}>
                                    <Box component="form" onSubmit={SubmitImmunization} sx={{ mt: 3 }}sm={12}>
                                        <Box  sx={{ mt: 3 }}sm={12}>
                                            <Grid container spacing={2}>
                                            <Grid item xs={12} sm={4}>
                                            {
                                (addFormValue?.Vaccine1 == undefined || addFormValue?.Vaccine1 == "")
                                ?
                                (
                                    <TextField
                                    SelectProps={{ MenuProps: {
                                            PopoverClasses: {
                                            root: classes.customMenuPopover
                                                            }
                                                    }
                                                }}
                                variant="outlined" select id="Vaccine1" name="Vaccine1" label="Vaccine Dose" fullWidth   
                                InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"></InputAdornment>,
                                            }}>
                                        {Vaccine.map((Vaccine, index) => (
                                            <MenuItem key={index} value={Vaccine}>
                                            {Vaccine} 
                                            </MenuItem>
                                        ))}
                                        </TextField>
                                )
                                :
                                (
                                    <TextField  value={addFormValue?.Vaccine1} inputProps={{ readOnly: true }}
                                    InputProps={{
                              startAdornment: <InputAdornment style={{ padding: '0' }} position="start"  
                              inputProps={{ readOnly: true }}></InputAdornment>
                                  }}>    
                                 </TextField>
                                )
                                }
                                              
                                                </Grid>
                                                <Grid item xs={12} sm={4}>
                                                {
                                // (immunizationformdata?.covid?.VaccineName1 == undefined)
                                (addFormValue?.VaccineName1 == undefined || addFormValue?.VaccineName1 == "")
                                ?
                                (
                                    <TextField
                                    SelectProps={{
                                        MenuProps: {
                                            PopoverClasses: {
                                            root: classes.customMenuPopover
                                                            }
                                                    }
                                                }}
                                            variant="outlined" select id="VaccineName1"  name="VaccineName1" label="Vaccine Name" fullWidth   InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        >
                                        {VaccineName.map((VaccineName, index) => (
                                            <MenuItem key={index} value={VaccineName}>
                                            {VaccineName}
                                            </MenuItem>
                                        ))}
                                        </TextField>
                                )
                                :
                                (
                                    <TextField value={addFormValue.VaccineName1} inputProps={{ readOnly: true }}
                                    InputProps={{
                              startAdornment: <InputAdornment style={{ padding: '0' }} position="start"  
                              inputProps={{ readOnly: true }}> </InputAdornment>
                                  }}>    
                                 </TextField>
                                )
                                }

                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                    fullWidth id="Vaccinatedon1" value={addFormValue.Vaccinatedon1}  name="Vaccinatedon1" label="When to give" autoComplete="off"  
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
                                {
                                (addFormValue?.Vaccine2 == undefined || addFormValue?.Vaccine2 == "")
                                ?
                                (
                                    <TextField
                                    SelectProps={{
                                        MenuProps: {
                                            PopoverClasses: {
                                            root: classes.customMenuPopover
                                                            }
                                                    }
                                                }}
                                            variant="outlined" select id="Vaccine2"  name="Vaccine2" placeholder='Vaccine Dose'
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
                                )
                                :
                                (
                                    <TextField value={addFormValue?.Vaccine2} inputProps={{ readOnly: true }}
                                    InputProps={{
                              startAdornment: <InputAdornment style={{ padding: '0' }} position="start"  
                              inputProps={{ readOnly: true }}></InputAdornment>
                                  }}>    
                                 </TextField>
                                )
                                }
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                {
                                (addFormValue?.VaccineName2 == undefined || addFormValue?.VaccineName2 == "")
                                ?
                                (
                                    <TextField
                                    SelectProps={{
                                        MenuProps: {
                                            PopoverClasses: {
                                            root: classes.customMenuPopover
                                                            }
                                                    }
                                                }}
                                            variant="outlined" select id="VaccineName2" value={addFormValue.VaccineName2}  placeholder='Vaccine Name' name="VaccineName2"
                                            label="Vaccine Name" fullWidth   InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"></InputAdornment>,
                                            }}
                                        >
                                        {VaccineName.map((vaccinename, index) => (
                                            <MenuItem key={index} value={vaccinename}>
                                            {vaccinename}
                                            </MenuItem>
                                        ))}
                                        </TextField>
                                )
                                :
                                (
                                    <TextField value={addFormValue.VaccineName2} inputProps={{ readOnly: true }}
                                    InputProps={{
                              startAdornment: <InputAdornment style={{ padding: '0' }} position="start"  
                              inputProps={{ readOnly: true }}></InputAdornment>
                                  }}>    
                                 </TextField>
                                )
                                }
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                    fullWidth id="VaccinatedOn2" name="VaccinatedOn2" 
                                      label="When to give"   value={addFormValue.VaccinatedOn2}
                                      autoComplete="off" 
                                      InputProps={{
                                          startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                      }}
                                  /> 
                                                </Grid>
                                            </Grid>
                                        </Box>
                                      <center>
                                        <Grid item sm={4}>
                                        {
                                (addFormValue == undefined || addFormValue == 0)
                                ?
                                (
                                    <Button 
                                    styles={{ padding: '0', margin: '30' }} type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
                                    <div className='solid-button'>Submit</div>
                                    </Button>
                                )
                                :
                                (
                                    <Button 
                                    styles={{ padding: '0', margin: '30' }} type="button" fullWidth sx={{ mt: 3, mb: 2 }}>
                                    <div className='solid-button'>Back</div>
                                    </Button>
                                )
                                }
                                            </Grid></center>
                                  
                                    </Box>
                                </TabPanel>
                            <TabPanel value={value} index={1}>
                            <Box component="form" onSubmit={SubmitVaccineDetails} sx={{ mt: 3 }}sm={12}>
                                <Box  sx={{ mt: 3 }}sm={12}>
                                    <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                    <TextField
                                            fullWidth id="VaccineName_1" name="VaccineName_1" 
                                            label="Vaccine Name"  placeholder='Vaccine Name'  value={othervaccine?.VaccineName_1}
                                            autoComplete="off" 
                                            InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth id="VaccineDate_1" name="VaccineDate_1" 
                                            label="Vaccine Date"  placeholder='Vaccine Date' value={othervaccine.VaccineDate_1}
                                            autoComplete="off" 
                                            InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth id="VaccineDescription_1" name="VaccineDescription_1" 
                                            label="Vaccine Description"  placeholder='Vaccine Description' value={othervaccine.VaccineDescription_1}
                                            autoComplete="off" 
                                            InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        />
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box  sx={{ mt: 3 }}sm={12}>
                                    <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                    <TextField
                                            fullWidth id="VaccineName_2" name="VaccineName_2" 
                                            label="Vaccine Name"  placeholder='Vaccine Name'
                                            autoComplete="off"   value={othervaccine.VaccineName_2}
                                            InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth id="VaccineDate_2" name="VaccineDate_2"  value={othervaccine.VaccineDate_2}
                                            label="Vaccine Date"  placeholder='Vaccine Date'
                                            autoComplete="off" 
                                            InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth id="VaccineDescription_2" name="VaccineDescription_2" value={othervaccine.VaccineDescription_2}
                                            label="Vaccine Description"  placeholder='Vaccine Description'
                                            autoComplete="off" 
                                            InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        />
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box  sx={{ mt: 3 }}sm={12}>
                                    <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                    <TextField
                                            fullWidth id="VaccineName_3" name="VaccineName_3" value={othervaccine.VaccineName_3}
                                            label="Vaccine Name"  placeholder='Vaccine Name'
                                            autoComplete="off" 
                                            InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth id="VaccineDate_3" name="VaccineDate_3"  value={othervaccine.VaccineDate_3}
                                            label="Vaccine Date"  placeholder='Vaccine Date'
                                            autoComplete="off" 
                                            InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth id="VaccineDescription_3" name="VaccineDescription_3" value={othervaccine.VaccineDescription_3}
                                            label="Vaccine Description"  placeholder='Vaccine Description'
                                            autoComplete="off" 
                                            InputProps={{
                                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                            }}
                                        />
                                        </Grid>
                                    </Grid>
                                </Box>
                                <center>
                                <Grid item sm={4}>
                                {
                                (othervaccine == undefined || othervaccine == 0)
                                ?
                                (
                                    <Button styles={{ padding: '0', margin: '30' }}type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
                                    <div className='solid-button'>Submit</div>
                                    </Button>
                                )
                                :
                                (
                                    <Button styles={{ padding: '0', margin: '30' }}type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
                                    <div className='solid-button'>Back </div>
                                    </Button>
                                )
                                }
                                    </Grid></center>
                                </Box>

                            </TabPanel>
                            </Box>
                            </Container>
                            <BasicModal state={open} onClose={handleClose}>
                                Vaccination Data Added Successfully
                            </BasicModal>
                        </Grid>

                    </Grid>
                </div>
            </div>
            <div >
            </div>
            
                </>
 );              
}

const mapStateToProps = (state) => {
    return {
        ImmunizationData: state.immunization.ImmunizationData,
    };
};
const mapdispatchToProps = (dispatch) => {
    return {
        addimmunizationdata: (data) => dispatch(addimmunizationdata(data)),
    };
};

export default connect(mapStateToProps, mapdispatchToProps)(Immunization);