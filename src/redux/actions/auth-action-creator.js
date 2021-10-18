import * as ACTION_TYPE from "./action-types";
import axios from "axios";
import "../../services/auth-service";

let config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const registerUser = (params) => {
  return (dispatch) => {
    let payload = {
      message: "",
    };
    dispatch(LOAD());

    axios
      .post("http://localhost:9999/register", params, config)
      .then((response) => {
        console.log(response);
        payload.message = `Email Id: ${params.email} registered successfully`;
        dispatch(SUCCESS(payload));
      })
      .catch((err) => {
        payload.message = `REGISTRATION ERROR: ${err.message} `;
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
    };
    dispatch(LOAD());

    axios
      .post("http://localhost:9999/login", params, config)
      .then((response) => {
        payload.message = `Email Id: ${params.email} logged in successfully`;
        payload.isLoggedIn = true;
        payload.authToken = response.data.accessToken;
        payload.role = response.data.user.role;

        dispatch(SUCCESS(payload));
      })
      .catch((err) => {
        payload.message = `LOGIN ERROR: ${err.message} `;
        dispatch(FAILURE(payload));
      });
  };
};

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
