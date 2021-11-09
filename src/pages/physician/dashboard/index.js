import { Button } from "@material-ui/core";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import  { getscheduledappointmentdata,updateexistingschedulerrecord,deleteschedulerrecord } from "../../../redux/actions/common-action-creator";
import { connect } from "react-redux";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import "../../../styles/common-style.css"
import BasicModal from "../../../components/modals";


function PhyMain({ appointmentsData,getscheduledappointmentdata,updateexistingschedulerrecord,deleteschedulerrecord}) {
   
    const [open1, setsAccept] = React.useState(false);
    const handleAccept = () => setsAccept(true);

    const [open2, setReject] = React.useState(false);
    const handleReject = () => setReject(true);

    const handleClose1 = () => {setsAccept(false);};
    const handleClose2 = () => {setReject(false);};
    
    let appointments = appointmentsData?.filter((item) => item.status === "Pending");
    useEffect(()=>{
        getscheduledappointmentdata();
    },[]);


    const [appointmentsTableData, setappointmentsData] = React.useState(appointments);
    
   const accept = (appointment) => {
    let acceptedAppointment = {...appointment,status:"accepted"};
    updateexistingschedulerrecord(acceptedAppointment.id,acceptedAppointment);
    handleAccept();
   }
   const reject = (id) => {
    deleteschedulerrecord(id);
    handleReject();
   }
    
   const headers = ["Meeting Title", "Patient Name", "Scheduled Date", "Scheduled Time","Actions"]
    return (
        <>
            <h2 className="header-title" style={{margin:'0'}}>New Appointments Request</h2>

            <center>
            <Container component="main" maxWidth="md">
                    <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                <div className='inside-page-cards' style={{paddingLeft:'20px',paddingRight:'20px'}}>
            <table className="table-style">
                {
                    headers.map((item) =>
                        <th>{item} </th>
                    )}

                {
                    appointmentsTableData.map((item) => (
                        <tr> 
                            <td>{item.meetingTitle}</td>
                            <td>{item.patientname}</td>
                            <td>{item.date}</td>
                            <td> {item.time}</td>
                            <td>
                                <Button variant='text' style={{ margin: '5px',padding:'0' }} onClick={()=>accept(item)}><CheckIcon style={{color:'--solid-icon-color',padding:'0'}}></CheckIcon></Button>
                                <Button variant='text' style={{ margin: '5px',padding:'0' }} onClick={()=>reject(item.id)}><ClearIcon style={{color:'--solid-icon-color',padding:'0'}}></ClearIcon></Button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </div>
            </Box>
            </Container>
            </center>

            <BasicModal state={open1} onClose={handleClose1}>
                    Appointment Accepted
            </BasicModal>
            <BasicModal state={open2} onClose={handleClose2}>
                    Appointment Rejected
            </BasicModal>

        </>
    );
}
const mapStateToProps = (state) => {
    return {
        appointmentsData: state.Scheduleappointment.schedulerData

    };
  };
  const mapdispatchToProps = (dispatch) => {
    return {
        getscheduledappointmentdata: () => dispatch(getscheduledappointmentdata()),
        updateexistingschedulerrecord: (appointmentId,appointmentData) => dispatch(updateexistingschedulerrecord(appointmentId,appointmentData)),
        deleteschedulerrecord: (id) => dispatch(deleteschedulerrecord(id))
    };
  };

  export default connect(mapStateToProps, mapdispatchToProps)(PhyMain);

