import * as ACTION_TYPE from "./action-types";
import axios from "axios";
import "../../services/auth-service";

let config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const patientimmunization = (ImmunizationData) => {
    return (dispatch) => {
  
      axios
        .post(" http://localhost:9999/immunization", ImmunizationData, config)
        .then(res => {
              axios.get(` http://localhost:9999/immunization`)
                  .then(res => {
                          dispatch({type: ACTION_TYPE.GET_IMMUNIZATION_DATA, ImmunizationData:res.data});
                  })
                  .catch(err => {
                          dispatch({type: ACTION_TYPE.GET_IMMUNIZATION_DATA, ImmunizationData:err.res.data});
                  })
          })
          .catch(err => {
            dispatch({type: ACTION_TYPE.GET_IMMUNIZATION_DATA, ImmunizationData:err.res.data});
        })
      }};
