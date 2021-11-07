import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import  { getscheduledappointmentdata,updateexistingschedulerrecord,deleteschedulerrecord } from "../../../redux/actions/scheduler-action-creater";
import { connect } from "react-redux";



function PhyMain({ appointmentsData,getscheduledappointmentdata,updateexistingschedulerrecord,deleteschedulerrecord}) {
    let appointments = appointmentsData?.filter((item) => item.status === "Pending");
    useEffect(()=>{
        getscheduledappointmentdata();
    },[]);


    const [appointmentsTableData, setappointmentsData] = React.useState(appointments);
    
   const accept = (appointment) => {
    let acceptedAppointment = {...appointment,status:"accepted"};
    updateexistingschedulerrecord(acceptedAppointment.id,acceptedAppointment);

   }
   const reject = (id) => {
    deleteschedulerrecord(id);

   }
    
   const headers = ["Meeting Title", "Patient Name", "Scheduled Date", "Scheduled Time","Actions"]
    return (
        <>
            <h1>
                Physician main page
            </h1>

            <table style={{border:'1px solid black'}}>
                {
                    headers.map((item) =>
                        <th>{item} </th>
                    )}

                {
                    appointmentsTableData.map((item) => (
                        <tr> 
                            <td>{item.meetingTitle}</td>
                            <td>{item.patientId}</td>
                            <td>{item.date}</td>
                            <td> {item.time}</td>
                            <td>
                                <Button variant='contained' style={{ margin: '5px' }} onClick={()=>accept(item)}>Accept</Button>
                                <Button variant='contained' style={{ margin: '5px' }} onClick={()=>reject(item.id)}>Reject</Button>
                            </td>
                        </tr>
                    ))
                }
            </table>

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

