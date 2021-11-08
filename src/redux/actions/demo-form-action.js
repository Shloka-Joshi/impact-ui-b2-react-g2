import * as ACTION_TYPE from "./action-types";
import axios from "axios";
// import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";

let config = {
    headers:{
            "content-type" : "application/json",
    },
};

let authToken = ''
axios.interceptors.request.use((req) => {
    if(req.methos === "get"){
        req.headers.authorization = `Bearer ${authToken}`;
    }
    return req;
});

export const getdemoformdata = (formDemo) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.get(` http://localhost:9999/demoform`)
        .then(res => {
            dispatch({type : ACTION_TYPE.GET_ALL_DEMO_DATA, formDemo:res.data});
        }
            )

    }
}