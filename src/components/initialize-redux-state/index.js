import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getrolespecificuserdata} from "../../redux/actions/common-action-creator";
import { getpatientdata } from "../../redux/actions/common-action-creator";
import { getscheduledappointmentdata} from "../../redux/actions/common-action-creator";
import { connect } from "react-redux";
const InitState = ({isLoggedIn,getrolespecificuserdata,getpatientdata,getscheduledappointmentdata}) => {
    
    useEffect(()=>{
        if(isLoggedIn)
        {
            getrolespecificuserdata("physician")
            getpatientdata()
            getscheduledappointmentdata()
        }  
    },[]);

    return <>
    
    </>

}

const mapStateToProps = (state) => {
    return {
      data: state.auth.data,
      isLoggedIn: state.auth.isLoggedIn,
      errors: state.auth.errors
    };
  };
const mapdispatchToProps = (dispatch) => {
    return {
        getrolespecificuserdata: (data) => dispatch(getrolespecificuserdata(data)),
        getpatientdata: () => dispatch(getpatientdata()),
        getscheduledappointmentdata: () => dispatch(getscheduledappointmentdata()),

    };
  };
  
  export default  connect(mapStateToProps, mapdispatchToProps)(InitState);