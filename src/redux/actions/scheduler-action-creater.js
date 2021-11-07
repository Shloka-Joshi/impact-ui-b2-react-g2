import * as ACTION_TYPE from "./action-types";
import axios from "axios";

let config = {
  headers: {
    "Content-Type": "application/json",
  },
};

let authToken = ''
axios.interceptors.request.use((req) => {
    req.headers.authorization = `Bearer ${authToken}`;
  return req;
});


export const getscheduledappointmentdata = (id=null) => {
  return (dispatch, getState) => {
    authToken = getState().auth.authToken;
    axios.get(`http://localhost:9999/scheduleAppointment`)
      .then(res => {
        dispatch({ type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData: res.data });
      })
      .catch(err => {
        dispatch({ type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData: err.response.data })
      })
  };
}

export const addscheduledappointmentdata = (schedulerData) => {
  return (dispatch, getState) => {
    authToken = getState().auth.authToken;

    axios.post(`http://localhost:9999/scheduleAppointment`,schedulerData, config)
      .then((res) => {
        axios.get(`http://localhost:9999/scheduleAppointment`)
          .then(res => {
            dispatch({ type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData: res.data })
          })
          .catch(err => {
            dispatch({ type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData: err.response.data });
          })
      })

      .catch(err => {
        dispatch({ type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData: err.response.data });
      })
  }
}

export const updateexistingschedulerrecord = (id,updatedschdulerData) => {
  return (dispatch,getState) => {

      authToken = getState().auth.authToken;

      axios.put(`http://localhost:9999/scheduleAppointment/${id}`,updatedschdulerData,config)
          .then(res => {
              axios.get(`http://localhost:9999/scheduleAppointment`)
              .then(res => {
                  dispatch({type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData:res.data});  
              })
              .catch(err => {
                  dispatch({type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData:err.response.data});
              })
          })
          .catch(err => {
                  dispatch({type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData:err.response.data});
          })
  };
}

export const deleteschedulerrecord = (id) => {
  return (dispatch,getState) => {

      authToken = getState().auth.authToken;

      axios.delete(`http://localhost:9999/scheduleAppointment/${id}`)
          .then(res => {
              axios.get(`http://localhost:9999/scheduleAppointment`)
              .then(res => {
                  dispatch({type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData:res.data});  
              })
              .catch(err => {
                  dispatch({type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData:err.response.data});
              })
          })
          .catch(err => {
                  dispatch({type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData:err.response.data});
          })
  };
}