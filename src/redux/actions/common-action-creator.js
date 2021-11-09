import * as ACTION_TYPE from "./action-types";
import axios from "axios";

let config = {
  headers: {
    "Content-Type": "application/json",
  },
};

let authToken = ''
axios.interceptors.request.use((req) => {
      req.headers.authorization = `Bearer ${authToken}`;
    return req;
  });

export const registerUser = (params) => {
  return (dispatch,getState) => {
    let payload = {
      message: "",
      isRegistered:false
    };
    dispatch(LOAD());
    
    axios
      .post("http://localhost:9999/register", params, config)
      .then((response) => {
        payload.message = `registered successfully`;
        payload.isLoggedIn = getState().auth.isLoggedIn;
        payload.authToken = getState().auth.authToken;
        payload.role = getState().auth.role;
        payload.currentUser = getState().auth.currentUser;
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

export const getAppointments = (role) => {
    return (dispatch,getState) => {

            authToken = getState().auth.authToken;

    axios.get(`hhttp://localhost:9999/scheduleAppointment`)
        .then(res => {
            console.log(res);
                dispatch({type: ACTION_TYPE.GET_ALL_APPOINTMENT, appointmentData:res.data});
        })
        .catch(err => {
                dispatch({type: ACTION_TYPE.GET_ALL_APPOINTMENT, appointmentData:err.res.data});
        })
};
}

export const adddemographicsdata = (DemographicsData) => {
 
    return (dispatch,getState) => {
  
        authToken = getState().auth.authToken;
  
        axios.post(`http://localhost:9999/patientDemographics`,DemographicsData,config)
            .then(res => {
              console.log(res);
                axios.get(`http://localhost:9999/patientDemographics`)
                .then(res => {
                  console.log(res);
                    dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:err.res.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:err.res.data});
            })
    };
  }
  export const getdemographicsdata = (id) => {
    return (dispatch,getState) => {
  
        authToken = getState().auth.authToken;
                axios.get(`http://localhost:9999/patientDemographics?id=38`)
                .then(res => {
                  console.log(res);
                    dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.GET_DEMOGRAPHICS_DATA, DemographicsData:err.res.data});
                })
    };
  }

  export const getdiagnosisreportsdata = (id) => {
    const api = ()=>{
      return axios.get(`http://localhost:9999/diagnosisReports?userId=${id}`)
    }
    
    

    return (dispatch,getState) => {
    
        // authToken = getState().auth.authToken;

         api().then(res => {
          dispatch({type: ACTION_TYPE.GET_DIAGNOSISREPORTS_DATA, diagnosisreportsData:res.data});

  })
  .catch(err => {
          dispatch({type: ACTION_TYPE.GET_DIAGNOSISREPORTS_DATA, diagnosisreportsData:err.response.data});
  })

       
    };
}

export const addimmunizationdata = (ImmunizationData) => {
    return (dispatch,getState) => {
  
      authToken = getState().auth.authToken;
  
          axios.post(`http://localhost:9999/immunization`,ImmunizationData,config)
              .then(res => {
                console.log(res);
                axios.get(`http://localhost:9999/immunization?id=134`)
              .then(response => {
                console.log(response);
                  dispatch({type: ACTION_TYPE.GET_IMMUNIZATION_DATA, PatientImmunizationData:response.data});  
              })
              .catch(err => {
                  dispatch({type: ACTION_TYPE.GET_IMMUNIZATION_DATA, ImmunizationData:err.response.data});
              })
              })
              .catch(err => {
                      dispatch({type: ACTION_TYPE.GET_IMMUNIZATION_DATA, ImmunizationData:err.res.data});
              })
      };
  }

  export const getpatientdata = (role) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;
    dispatch(LOAD());
        axios.get(`http://localhost:9999/users?role=${role}`)
            .then(res => {
                if(role == "patient")
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});

            })
            .catch(err => {
                if(role == "patient")
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}

export const addnewpatientrecord = (patientData) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.post(`http://localhost:9999/users?role=patient`,patientData,config)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=patient`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}


export const updateexistingpatientrecord = (id,updatedpatientData) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.put(`http://localhost:9999/users/${id}`,updatedpatientData,config)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=patient`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}

export const deletepatientrecord = (id) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.delete(`http://localhost:9999/users/${id}`)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=patient`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}

export const getrolespecificuserdata = (role) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;
    dispatch(LOAD());
        axios.get(`http://localhost:9999/users?role=${role}`)
            .then(res => {
                if(role == "physician")
                    dispatch({type: ACTION_TYPE.GET_PHYSICIAN_DATA, physicianData:res.data});
                else if(role == "patient")
                    dispatch({type: ACTION_TYPE.GET_PATIENT_DATA, patientData:res.data});

            })
            .catch(err => {
                if(role == "physician")
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data})
                else if(role == "patient")
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}

export const addnewphysicianrecord = (physicianData) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.post(`http://localhost:9999/users?role=physician`,physicianData,config)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=physician`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PHYSICIAN_DATA, physicianData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}

export const updateexistingphysicianrecord = (id,updatedphysicianData) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.put(`http://localhost:9999/users/${id}`,updatedphysicianData,config)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=physician`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PHYSICIAN_DATA, physicianData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}

export const deletephysicianrecord = (id) => {
    return (dispatch,getState) => {

        authToken = getState().auth.authToken;

        axios.delete(`http://localhost:9999/users/${id}`)
            .then(res => {
                axios.get(`http://localhost:9999/users?role=physician`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_PHYSICIAN_DATA, physicianData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
}

export const getscheduledappointmentdata = (id=null) => {
    return (dispatch, getState) => {
      authToken = getState().auth.authToken;
      dispatch(LOAD());
      axios.get(`http://localhost:9999/scheduleAppointment`)
        .then(res => {
          dispatch({ type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData: res.data });
        })
        .catch(err => {
          dispatch({ type: ACTION_TYPE.FAILURE, errors: err.response.data })
        })
    };
  }
  
  export const addscheduledappointmentdata = (schedulerData) => {
    return (dispatch, getState) => {
      authToken = getState().auth.authToken;
  
      axios.post(`http://localhost:9999/scheduleAppointment`,schedulerData, config)
        .then((res) => {
          axios.get(`http://localhost:9999/scheduleAppointment`)
            .then(res => {
              dispatch({ type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData: res.data })
            })
            .catch(err => {
              dispatch({ type: ACTION_TYPE.FAILURE, errors: err.response.data });
            })
        })
  
        .catch(err => {
          dispatch({ type: ACTION_TYPE.FAILURE, errors: err.response.data });
        })
    }
  }
  
  export const updateexistingschedulerrecord = (id,updatedschdulerData) => {
    return (dispatch,getState) => {
  
        authToken = getState().auth.authToken;
  
        axios.put(`http://localhost:9999/scheduleAppointment/${id}`,updatedschdulerData,config)
            .then(res => {
                axios.get(`http://localhost:9999/scheduleAppointment`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
    };
  }
  
  export const deleteschedulerrecord = (id) => {
    return (dispatch,getState) => {
  
        authToken = getState().auth.authToken;
  
        axios.delete(`http://localhost:9999/scheduleAppointment/${id}`)
            .then(res => {
                axios.get(`http://localhost:9999/scheduleAppointment`)
                .then(res => {
                    dispatch({type: ACTION_TYPE.GET_SCHEDULER_DATA, schedulerData:res.data});  
                })
                .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
                })
            })
            .catch(err => {
                    dispatch({type: ACTION_TYPE.FAILURE, errors:err.response.data});
            })
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
  