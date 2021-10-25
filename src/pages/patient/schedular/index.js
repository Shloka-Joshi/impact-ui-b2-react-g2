import { Button, Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { InputAdornment } from "@mui/material";
import React, { useState } from "react";
import reactDom from "react-dom";
import "../../../styles/common-style.css"
import { makeStyles } from "@mui/styles";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import axios from "axios";

import EventCalendar from "../../../components/my-own-stuff/event-calendr";


const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 100,
    }
}));




export default function ScheduleAppointment() {
    const specialists = ["specialist-1", "specialist-2", "specialist-3", "specialist-4", "specialist-5"];
    const phisicians = ["phisician-1", "phisician-2", "phisician-3", "phisician-4", "phisician-5"];
    const selecttime = ["9-10", "10-11", "12-1", "1-2", "2-3"];


    const classes = useStyles();

    const scheduleData = (event) => {
        event.preventDefault();
        console.log(event);

        axios.post('http://localhost:9999/schedulder').then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            {/* <Calendar onChange={onChange} value={this.state.date}/> */}
            <Container component="main" maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Grid container>
                        <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
                            <h1 className="page-title">Schedule an Appointment</h1>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container component="main" maxWidth="md">
                <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <form onSubmit={scheduleData}>
                        <div className='inside-page-cards'>

                            <Grid container p={2} spacing={2}>
                                <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                                    <FormControl fullWidth>
                                        <TextField style={{ padding: '0px' }} className={classes.textFeild} placeholder="Meeting Title" id="meetingTitle"
                                            InputProps={{ startAdornment: <InputAdornment position="start">Title : </InputAdornment>, }} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                                    <FormControl fullWidth>
                                        <TextField className={classes.textFieldStyle} placeholder="Meeting Description" id="meetingDescription" InputProps={{
                                            startAdornment: <InputAdornment style={{ padding: '0' }} position="start">Description : </InputAdornment>,
                                        }} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                                    <TextField SelectProps={{
                                        MenuProps: {
                                            PopoverClasses: {
                                                root: classes.customMenuPopover
                                            }
                                        }
                                    }}
                                        variant="outlined" select id="specialistOf" name="specialistOf" helperText="Select Specialist" fullWidth >

                                        {specialists.map((specialist, index) => (
                                            <MenuItem key={index} value={specialist} style={{ zIndex: 1900 }}>
                                                {specialist}
                                            </MenuItem>
                                        ))}

                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                                    <TextField SelectProps={{
                                        MenuProps: {
                                            PopoverClasses: {
                                                root: classes.customMenuPopover
                                            }
                                        }
                                    }}
                                        variant="outlined" select id="physicianName" name="physicianName" helperText="Select Physician" fullWidth >

                                        {phisicians.map((physician, index) => (
                                            <MenuItem key={index} value={physician} style={{ zIndex: 1900 }}>
                                                {physician}
                                            </MenuItem>
                                        ))}

                                    </TextField>
                                </Grid>

                                <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                                <TextField
                                required
                                fullWidth
                                id="dob"
                                name="dob"
                                type="date"
                                helperText="Select Date"
                                autoComplete="off"
                                InputProps={{
                                  startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                }}
                              />
                                </Grid>
                                <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                                    <TextField SelectProps={{
                                        MenuProps: {
                                            PopoverClasses: {
                                                root: classes.customMenuPopover
                                            }
                                        }
                                    }}
                                        variant="outlined" select id="time" name="select time" helperText="Select Time" fullWidth >

                                        {selecttime.map((time, index) => (
                                            <MenuItem key={index} value={selecttime} style={{ zIndex: 1900 }}>
                                                {time}
                                            </MenuItem>
                                        ))}

                                    </TextField>
                                </Grid>
                            </Grid> <center>
                            <Grid>
                               <Grid maxWidth="sm" item xs={12} sm={12} lg={4} xl={4} md={4}>
                                    <Button
                                        type="submit"
                                        variant="contained">Submit</Button>
                                </Grid>
                            </Grid>
                            <br/><hr/><br/>
                            <Grid item xs={12} sm={12} lg={9} xl={9} md={9} >
                                <EventCalendar/>
                            </Grid></center>

                        </div>
                    </form>
                </Box>
            </Container>

        </>
    );
}

// export default ScheduleAppointment;