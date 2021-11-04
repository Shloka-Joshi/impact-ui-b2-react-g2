import * as ACTION_TYPE from "../actions/action-types";
import { initialState } from "../main-state";

const DemographicsDataReducer = (state = initialState, action) => {
 if (action.type === ACTION_TYPE.GET_DEMOGRAPHICS_DATA) 
 {
      return {
        ...state,
        demographicsData:action.demographicsData,
      };
    }
     return state;
  }

export default DemographicsDataReducer;
