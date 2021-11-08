import * as ACTION_TYPE from "../actions/action-types";
import { initialState } from "../main-state";

const DiagnosisreportsDataReducer = (state = initialState, action) =>{
    if(action.type === ACTION_TYPE.GET_DIAGNOSISREPORTS_DATA)
    {
        return {
            diagnosisreportsData: action.diagnosisreportsData,
        };
    }

    return state;   
}

export default DiagnosisreportsDataReducer;