import * as ACTION_TYPE from "../actions/action-types";
import { initialState } from "../main-state";

const PhysicianDataReducer = (state = initialState, action) =>{
    if(action.type === ACTION_TYPE.GET_PHYSICIAN_DATA)
    {
        return {
            physicianData: action.physicianData,
        };
    }

    return state;   
}

export default PhysicianDataReducer;