import axios from "axios";
import { initialState } from "../redux/main-state";

axios.interceptors.request.use((req) => {
  if (req.method === "get") {
    req.headers.authorization = initialState.authToken;
  }
  return req;
});
