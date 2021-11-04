import * as ACTION_TYPE from "./action-types";
import axios from "axios";

export const getAppointments = (role) => {

    return (dispatch,getState) => {

                  debugger;

        //authToken = getState().auth.authToken;



        axios.get(`http://localhost:9999/scheduleAppointment`)

            .then(res => {

                    dispatch({type: ACTION_TYPE.GET_ALL_APPOINTMENT, appointmentData:res.data});



            })

            .catch(err => {

                    dispatch({type: ACTION_TYPE.GET_ALL_APPOINTMENT, appointmentData:err.response.data});

            })

    };

}