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
        role: actions.data.role,
        authToken: actions.data.authToken,
        isLoggedIn: actions.data.isLoggedIn,
      };

    case ACTION_TYPE.FAILURE:
      return {
        errors: actions.errors,
      };

    case ACTION_TYPE.LOGOUT:
      return {
        data: actions.data,
        role: actions.data.role,
        authToken: actions.data.authToken,
        isLoggedIn: actions.data.isLoggedIn,
      };

    default:
      return state;
  }
};

export default authReducer;
