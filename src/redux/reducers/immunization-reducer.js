import * as ACTION_TYPE from "../actions/action-types";
import { initialState } from "../main-state";

const ImmunizationDataReducer = (state = initialState, action) => {
 if (action.type === ACTION_TYPE.GET_IMMUNIZATION_DATA) 
 {
      return {
        ImmunizationData:action.ImmunizationData,
      };
    }
  
     return state;
    }
   
export default ImmunizationDataReducer;
