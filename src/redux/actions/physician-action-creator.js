import * as ACTION_TYPE from "./action-types";
import axios from "axios";

let authToken = ''
axios.interceptors.request.use((req) => {
    if (req.method === "get") {
      req.headers.authorization = `Bearer ${authToken}`;
    }
    return req;
  });

export const getrolespecificuserdata = (role) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.get(`http://localhost:9999/users?role=${role}`)
            .then(res => {
                if(role == "physician")
                    dispatch({type: ACTION_TYPE.GET_PHYSICIAN_DATA, physicianData:res.data});
                else if(role == "physician")
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});

            })
            .catch(err => {
                if(role == "physician")
                    dispatch({type: ACTION_TYPE.GET_PHYSICIAN_DATA, physicianData:err.response.data})
                else if(role == "physician")
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:err.response.data});
            })
    };
}