import * as ACTION_TYPE from "../actions/action-types";
import { initialState } from "../main-state";

const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ACTION_TYPE.LOAD:
      return {
        ...state,
      };

    case ACTION_TYPE.SUCCESS:
      return {
        data: actions.data,
      };

    case ACTION_TYPE.FAILURE:
      return {
        errors: actions.errors,
      };

    default:
      return state;
  }
};

export default authReducer;
