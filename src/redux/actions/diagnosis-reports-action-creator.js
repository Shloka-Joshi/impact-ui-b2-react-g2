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
  export const getdiagnosisreportsdata = (id) => {
    const api = ()=>{
      return axios.get(`http://localhost:9999/diagnosisReports?userId=${id}`)
    }
    
    

    return (dispatch,getState) => {
    
        // authToken = getState().auth.authToken;

         api().then(res => {
          dispatch({type: ACTION_TYPE.GET_DIAGNOSISREPORTS_DATA, diagnosisreportsData:res.data});

  })
  .catch(err => {
          dispatch({type: ACTION_TYPE.GET_DIAGNOSISREPORTS_DATA, diagnosisreportsData:err.response.data});
  })

       
    };
}
