import * as ACTION_TYPE from "../actions/action-types";
import { initialState } from "../main-state";

const PhysicianDataReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ACTION_TYPE.LOAD:
          return {
            ...state,
          };
    
        case ACTION_TYPE.GET_PHYSICIAN_DATA:
          return {
            ...state,
            physicianData: action.physicianData, //main-state array name
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

export default PhysicianDataReducer;