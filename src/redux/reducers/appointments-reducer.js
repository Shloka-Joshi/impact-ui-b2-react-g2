import * as ACTION_TYPE from "../actions/action-types";

import { initialState } from "../main-state";



const appointmentReducer = (state = initialState, action) =>{

    if(action.type === ACTION_TYPE.GET_ALL_APPOINTMENT)

    {

        return {
            ...state,
            appointmentData: action.appointmentData,

        };

    }



    return state;  

}



export default appointmentReducer;