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
  

export const getpatientdata = (role) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.get(`http://localhost:9999/users?role=${role}`)
            .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});

            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:err.response.data});
            })
    };
}


export const addnewpatientrecord = (patientData) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.post(`http://localhost:9999/users?role=patient`,patientData,config)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=patient`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:err.response.data});
            })
    };
}


export const updateexistingpatientrecord = (id,updatedpatientData) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.put(`http://localhost:9999/users/${id}`,updatedpatientData,config)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=patient`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:err.response.data});
            })
    };
}

export const deletepatientrecord = (id) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.delete(`http://localhost:9999/users/${id}`)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=patient`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:err.response.data});
            })
    };
}