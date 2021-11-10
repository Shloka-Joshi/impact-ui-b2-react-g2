import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import "./view-appointments.css"
import { getscheduledappointmentdata } from "../../../redux/actions/common-action-creator";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import interactionPlugin from "@fullcalendar/interaction";
import BasicModal from "../../../components/modals";

function EventCalendar({ getscheduledappointmentdata, appointmentsData }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };


  const[viewAppointmentData,setAppointmentId] = React.useState([]);

  const handeleDateClick = (arg) => {
    appointmentsData.map(item => {
      if (item.id == arg.event._def.publicId) {
        setAppointmentId([item]);
      }
    })
    handleOpen()
  }

  useEffect(() => {
    getscheduledappointmentdata();
  }, []);

  const eventArray = appointmentsData.map((item) => {
    return { title: item.patientname, id: item.id, date: item.date };
  })


  return (
    <div>
      <Container maxWidth="sm">
      <h2 className="header-title" style={{margin:'0'}}>All Appointments</h2>
      <div  className='inside-page-cards' style={{paddingLeft:'20px',paddingRight:'20px',marginTop:'30px'}}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={
            eventArray
          }
          eventClick={handeleDateClick}
        ></FullCalendar>
        </div>
      </Container>

      <BasicModal style={{ border: '0', borderRadius: '20px' }} state={open} onClose={handleClose} >
        {viewAppointmentData.length > 0? viewAppointmentData.map(item => {
          return <>
          <div style={{textAlign:'left'}}>
              <p><b>Name :  </b> {item.patientname}</p>
              <p><b>Title : </b>{item.meetingTitle}</p>
              <p><b>Reason :</b> {item.reason}</p>
              <p><b>Time : </b> {item.time}</p>
              <p><b>Status : </b>{item.status}</p>
              </div>
              </>
              
             })
             : <p>Invalid ID </p>
            }
      </BasicModal>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    appointmentsData: state.Scheduleappointment.schedulerData

  };
};
const mapdispatchToProps = (dispatch) => {
  return {
    getscheduledappointmentdata: () => dispatch(getscheduledappointmentdata()),
  };
};
export default connect(mapStateToProps, mapdispatchToProps)(EventCalendar);




