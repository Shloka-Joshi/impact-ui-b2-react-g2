import * as ACTION_TYPE from "./action-types";
import axios from "axios";

let config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const registerUser = (params) => {
  return (dispatch) => {
    let payload = {
      message: "",
      isRegistered:false
    };
    dispatch(LOAD());
    
    axios
      .post("http://localhost:9999/register", params, config)
      .then((response) => {
        payload.message = `registered successfully`;
        payload.isRegistered = true;
        dispatch(SUCCESS(payload));
      })
      .catch((err) => {
        payload.message = ` ERROR: ${err.message} `;
        dispatch(FAILURE(payload));
      });
  };
};

export const userLogin = (params) => {
  return (dispatch) => {
    let payload = {
      message: "",
      isLoggedIn: false,
      authToken: "",
      role: "",
      id:"",
      currentUser:"",
    };
    dispatch(LOAD(params));

    axios
      .post("http://localhost:9999/login", params, config)
      .then((response) => {
        if (response.data.user.approvedUser) {
          payload.message = `Email Id: ${params.email} logged in successfully`;
          payload.isLoggedIn = true;
          payload.authToken = response.data.accessToken;
          payload.role = response.data.user.role;
          payload.id = response.data.user.id;
          payload.currentUser = response.data.user;
          payload.firstName = response.data.user.firstName;
          dispatch(SUCCESS(payload));

        } else {

          payload.message = `${params.email} Not an approved user!`;
          dispatch(FAILURE(payload));

        }
      })
      .catch((err) => {
        payload.message = `LOGIN ERROR: ${err.response?err.response.data:'Internal Server Error'} `;
        dispatch(FAILURE(payload));
      });
    };
};
export  function Logout()
{
    let payload = {
      message: "Logged Out Successfully",
      isLoggedIn: false,
      authToken: "",
      role: "",
      id:"",
    };


    return (dispatch) => {
        return dispatch({type:  ACTION_TYPE.LOGOUT, data: payload});
    };
}

export const LOAD = () => {
  return {
    type: ACTION_TYPE.LOAD,
  };
};

export const SUCCESS = (data) => {
  return {
    type: ACTION_TYPE.SUCCESS,
    data: data,
  };
};
export const FAILURE = (errors) => {
  return {
    type: ACTION_TYPE.FAILURE,
    errors: errors,
  };
};
