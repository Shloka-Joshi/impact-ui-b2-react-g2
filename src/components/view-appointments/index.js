import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import "./event-calender.css"
import { getscheduledappointmentdata } from "../../redux/actions/common-action creator";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import interactionPlugin from "@fullcalendar/interaction";
import BasicModal from "../../components/modals";
import { useParams } from "react-router";

function EventCalendar({ getscheduledappointmentdata, appointmentsData }) {

  let {id,role} = useParams()

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
    getscheduledappointmentdata(id);
  }, []);

  const eventArray = appointmentsData.map((item) => {
    return { title: item.patientname, id: item.id, date: item.date };
  })


  return (
    <div>
      <Container maxWidth="sm">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={
            eventArray
          }
          eventClick={handeleDateClick}
        ></FullCalendar>
      </Container>

      <BasicModal style={{ border: '0', borderRadius: '20px' }} state={open} onClose={handleClose} >
        {viewAppointmentData.length > 0? viewAppointmentData.map(item => {
          return <>
              <p>Name :  {item.patientname}</p>
              <p>Title : {item.meetingTitle}</p>
              <p>Reason :{item.reason}</p>
              <p>Time : {item.time}</p>
              <p>Status : {item.status}</p>
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
    getscheduledappointmentdata: (id) => dispatch(getscheduledappointmentdata(id)),
  };
};
export default connect(mapStateToProps, mapdispatchToProps)(EventCalendar);




