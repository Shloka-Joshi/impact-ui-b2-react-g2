import * as ACTION_TYPE from "../actions/action-types";
import { initialState } from "../main-state";

const DemoFormDataReducer = (state = initialState, action) =>{
    if(action.type === ACTION_TYPE.GET_ALL_DEMO_DATA)
    {
        return{
            FormData : action.FormData,
        };
    }
    return state;
}

export default DemoFormDataReducer;