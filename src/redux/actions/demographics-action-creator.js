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

export const getrolespecificuserdata = (role) => {
  return (dispatch,getState) => {

    authToken = getState().auth.authToken;

        axios.get(`http://localhost:9999/users?role=${role}`)
        .then(res => {
          if(role == "patient")
              dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});

      })
      .catch(err => {
        if(role == "patient")
              dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:err.response.data});
      })
    };
}

export const adddemographicsdata = (DemographicsData) => {
  return (dispatch,getState) => {

    authToken = getState().auth.authToken;

        axios.post(`http://localhost:9999/patientDemographics`,DemographicsData,config)
            .then(res => {
              console.log(res);
                dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:res.data});  
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:err.res.data});
            })
    };
}