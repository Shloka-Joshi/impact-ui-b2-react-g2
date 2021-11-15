import { Button, Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { InputAdornment } from "@mui/material";
import React from "react";
import "../../../styles/common-style.css"
import { makeStyles } from "@mui/styles";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { getscheduledappointmentdata, addscheduledappointmentdata } from "../../../redux/actions/common-action-creator";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getrolespecificuserdata } from "../../../redux/actions/common-action-creator";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FormHelperText from '@mui/material/FormHelperText';
import BasicModal from "../../../components/modals";
import "../../../styles/common-style.css";


const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 100,
    }
}));

function ScheduleAppointment({patientname,errors, schedulerdata, physiciandata, getrolespecificuserdata, getscheduledappointmentdata, addscheduledappointmentdata }) {
    


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
    };
    
    const [time, setTime] = React.useState('');

        const handleChangetime = (event) => {
            setTime(event.target.value);
        };

        let { id, role } = useParams();
        const [physicians, setPhysicianData] = React.useState(physiciandata);
        const [selectedphysician, setPhysicianName] = React.useState('');

        useEffect(() => {
            getrolespecificuserdata("physician");
            // getscheduledappointmentdata(id);
        }, [physicians]);

        const handleChange = e => {
            setPhysicianName(prevState => ({
                physician: { ...prevState.physician, physicianName: e.target.value.firstName }

            }))
        }
        const classes = useStyles();

        const handleSubmit = (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            let body = {};
            for (let entry of data.entries()) {
                body[entry[0]] = entry[1];
            }
            body = {
                ...body,
                patientId: id,
                physicianId: selectedphysician.physician.physicianId,
                patientname:patientname,
                status: "Pending"
            }
            addscheduledappointmentdata(body);
            handleOpen();
        };

        const getSelectedPhysician = (p) => {
            setPhysicianName(prevState => ({
                physician: { ...prevState.physician, physicianId: p.id }

            }))
        }

        return (
            <>
                <Container component="main" maxWidth="sm">
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Grid container>
                            <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
                                <h2 className="header-title" style={{margin:'0'}}> Schedule an Appointment</h2>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

                <Container component="main" maxWidth="sm">
                    <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <form onSubmit={handleSubmit}>
                            <div className='inside-page-cards'>
                                <Grid container p={2} spacing={2}>
                                    <Grid item xs={12} sm={12} lg={12} xl={12} md={12}>
                                        <FormControl fullWidth required>
                                            <TextField required style={{ padding: '0px' }} className={classes.textFeild} placeholder="Meeting Title" id="meetingTitle" name="meetingTitle"
                                                InputProps={{ startAdornment: <InputAdornment position="start" >Title : </InputAdornment>, }} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={12} xl={12} md={12}>
                                        <FormControl fullWidth>
                                            <FormHelperText>Meeting Description</FormHelperText>
                                            <TextareaAutosize style={{ border:'1px solid #c3c3c3',borderRadius :'5px'}} required placeholder="Meeting Description" id="reason" name="reason" minRows={4} 
                                                InputProps={{ startAdornment: <InputAdornment style={{ padding: '0' }} position="start">Description : </InputAdornment>, }} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                                        <FormHelperText>Select Date</FormHelperText>
                                        <TextField required fullWidth id="date" name="date" type="date" autoComplete="off"
                                            InputProps={{ startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>, }} />
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                                    <FormControl fullWidth lg={{ m: 1, minWidth: 120 }}>
                                        <FormHelperText>Select Time</FormHelperText>
                                            <Select fullWidth value={time} onChange={handleChangetime} id="time" name="time">
                                                <MenuItem key={"1"} value={'10am - 10:30am'}>10:00am - 10:30am</MenuItem>
                                                <MenuItem key={"2"} value={'10:30am - 11am'}>10:30am - 11:00am</MenuItem>
                                                <MenuItem key={"3"} value={'11am - 11:30am'}>11:00am - 11:30am</MenuItem>
                                                <MenuItem key={"4"} value={'11:30am - 12pm'}>11:30am - 12:00pm</MenuItem>
                                                <MenuItem key={"5"} value={'12pm - 12:30pm'}>12:00pm - 12:30am</MenuItem>
                                                <MenuItem key={"6"} value={'12:30pm - 1pm'}>12:30am - 01:00pm</MenuItem>
                                                <MenuItem key={"7"} value={'1pm - 1:30pm'}>01:00pm - 01:30pm</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    
                                    <Grid item xs={12} sm={12} lg={12} xl={12} md={12}>
                                        <FormControl required fullWidth>
                                            <FormHelperText>Select Physician</FormHelperText>
                                            <Select fullWidth id="physicianName" name="physicianName" value={selectedphysician.physician?.physicianName} onChange={handleChange}>
                                                {physicians.map((result) => (<MenuItem style={{ display: "block" }} key={result.id} value={result.firstName} onClick={() =>getSelectedPhysician(result)}>{result.firstName} </MenuItem>))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid> <br />
                                <center>
                                    <Grid>
                                        <Grid maxWidth="sm" item xs={12} sm={12} lg={6} xl={6} md={6}>
                                            
                                            <Button  style={{padding:'0'}}
                                                type="submit"
                                                variant="link">
                                                   <span className='solid-button-style'> Schedule Appointment</span>
                                                    </Button>
                                        </Grid>
                                    </Grid>

                                    </center>
                            </div>
                        </form>
                    </Box>
                </Container>

                <BasicModal state={open} onClose={handleClose}>
                    Your appointment request has been sent
                </BasicModal>

            </>
        );
    }


    const mapStateToProps = (state) => {
        return {
            schedulerdata: state.Scheduleappointment.schedulerData,
            physiciandata: state.physiciandata.physicianData,
            patientname: state.auth.data.firstName,
            errors: state.Scheduleappointment.errors
        };
    };

    const mapdispatchToProps = (dispatch) => {
        return {
            getrolespecificuserdata: (data1) => dispatch(getrolespecificuserdata(data1)),
            addscheduledappointmentdata: (data2) => dispatch(addscheduledappointmentdata(data2)),
            getscheduledappointmentdata: (data3) => dispatch(getscheduledappointmentdata(data3))
        };
    };

    export default connect(mapStateToProps, mapdispatchToProps)(ScheduleAppointment);
