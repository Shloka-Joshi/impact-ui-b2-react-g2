import axios from "axios";
import { initialState } from "../redux/main-state";

// axios.interceptors.request.use((req) => {
//   if (req.method === "get") {
//     req.headers.authorization = initialState.authToken;
//   }
//   return req;
// });
export function getAppointments(){
    axios.get("http://localhost:9999/scheduleAppointment")
    .then((response) => {

        console.log("services appointments data", response.data);
  
        return response.data;
  
      })
  
      .catch((error) => {
  
        console.log("Error in get all appointments ", error);
  
      });
}