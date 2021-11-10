import axios from "axios";
import { initialState } from "../redux/main-state";

export function getAppointments(){
    axios.get("http://localhost:9999/scheduleAppointment")
    .then((response) => {  
        return response.data;
  
      })
  
      .catch((error) => {
    
      });
}