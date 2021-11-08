import * as ACTION_TYPE from "../actions/action-types";
import { initialState } from "../main-state";

const PatientDataReducer = (state = initialState, action) =>{
    if(action.type === ACTION_TYPE.GET_PATIENT_DATA)
    {
        return {
            patientData: action.patientData,
        };
    }

    return state;   
}

export default PatientDataReducer;