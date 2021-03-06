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

export const adddemographicsdata = (DemographicsData) => {
 
  return (dispatch,getState) => {

      authToken = getState().auth.authToken;

      axios.post(`http://localhost:9999/patientDemographics`,DemographicsData,config)
          .then(res => {
              axios.get(`http://localhost:9999/patientDemographics`)
              .then(res => {
                  dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:res.data});  
              })
              .catch(err => {
                  dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:err.res.data});
              })
          })
          .catch(err => {
                  dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:err.res.data});
          })
  };
}
export const getdemographicsdata = (id) => {
  return (dispatch,getState) => {

      authToken = getState().auth.authToken;
              axios.get(`http://localhost:9999/patientDemographics?id=38`)
              .then(res => {
                  dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:res.data});  
              })
              .catch(err => {
                  dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:err.res.data});
              })
  };
}

