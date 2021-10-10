import axios from "axios";

import * as ApiConstants from "../apiConstants";

const ApiCallsService = {
  getPatientData() {
    return axios.get(`http://localhost:9999/registerData?role=patient`);
  },
};

export default ApiCallsService;
