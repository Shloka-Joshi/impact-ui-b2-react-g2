import * as ACTION_TYPE from "../actions/action-types";
import { initialState } from "../main-state";

const ScheduleAppointmentReducer = (state = initialState,action) => {
    switch (action.type) {
        case ACTION_TYPE.LOAD:
          return {
            ...state,
          };
    
        case ACTION_TYPE.GET_SCHEDULER_DATA:
          return {
            ...state,
            schedulerData: action.schedulerData, //main-state array name
};
    
        case ACTION_TYPE.FAILURE:
          return {
              ...state,
            errors: action.errors,
          };
    
        default:
          return state;
      }
    };

export default ScheduleAppointmentReducer;