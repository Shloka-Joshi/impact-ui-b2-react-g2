import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "preact/compat";
import { connect } from "react-redux";
// import { formatDate } from "@fullcalendar/common";
import { getdemoformdata } from "../../../redux/actions/demo-form-action";

function ReducxPractice({data,getdata})
{
    useEffect(() => {
        getdata("theju","sirigala");
    },[]);

    console.log(data);

    return(
        <div>
                <form>
                    <TextField id="firstName"  variant="standard" />
                    <TextField id="lastName"  variant="standard" />
                    <Button  variant="contained">submit </Button>
                </form>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        data:state.demoform.FormData,
    };
};

const mapdispatchToProps = (dispatch) => {
    return{
        getdata:(firstName,lastName) => dispatch(getdemoformdata(firstName,lastName))
        };
};

export default connect(mapStateToProps,mapdispatchToProps) (ReducxPractice);