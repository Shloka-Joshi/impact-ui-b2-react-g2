import * as ACTION_TYPE from "../actions/action-types";
import { initialState } from "../main-state";

const ScheduleAppointmentReducer = (state = initialState,action) => {
    if(action.type === ACTION_TYPE.GET_SCHEDULER_DATA)
    {
        return {
            schedulerData: action.schedulerData, //main-state array name
        };
    }
    return state;
}

export default ScheduleAppointmentReducer;