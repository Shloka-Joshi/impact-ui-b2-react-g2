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

export const getrolespecificuserdata = (role) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;
    dispatch(LOAD());
        axios.get(`http://localhost:9999/users?role=${role}`)
            .then(res => {
                if(role == "physician")
                    dispatch({type: ACTION_TYPE.GET_PHYSICIAN_DATA, physicianData:res.data});
                else if(role == "patient")
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});

            })
            .catch(err => {
                if(role == "physician")
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data})
                else if(role == "patient")
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}

export const addnewphysicianrecord = (physicianData) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.post(`http://localhost:9999/users?role=physician`,physicianData,config)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=physician`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PHYSICIAN_DATA, physicianData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}


export const updateexistingphysicianrecord = (id,updatedphysicianData) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.put(`http://localhost:9999/users/${id}`,updatedphysicianData,config)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=physician`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PHYSICIAN_DATA, physicianData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}

export const deletephysicianrecord = (id) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.delete(`http://localhost:9999/users/${id}`)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=physician`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PHYSICIAN_DATA, physicianData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}
export const LOAD = () => {
    return {
      type: ACTION_TYPE.LOAD,
    };
  };