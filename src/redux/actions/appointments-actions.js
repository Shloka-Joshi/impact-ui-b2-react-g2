import * as ACTION_TYPE from "./action-types";
import axios from "axios";

let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
    let authToken = ''
    axios.interceptors.request.use((req) => {
        if (req.method === "get") {
          req.headers.authorization = `Bearer ${authToken}`;
        }
        return req;
      });

// export const getAppointments = (role) => {
//         return (dispatch,getState) => {

//                 authToken = getState().auth.authToken;

//         axios.get(`hhttp://localhost:9999/scheduleAppointment`)
//             .then(res => {
//                 console.log(res);
//                     dispatch({type: ACTION_TYPE.GET_ALL_APPOINTMENT, appointmentData:res.data});
//             })
//             .catch(err => {
//                     dispatch({type: ACTION_TYPE.GET_ALL_APPOINTMENT, appointmentData:err.res.data});
//             })
//     };
// }