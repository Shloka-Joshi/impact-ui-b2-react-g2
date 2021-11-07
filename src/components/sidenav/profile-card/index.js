import React from 'react'
import './profile-card.css';
import { makeStyles } from '@material-ui/core';
import { useSelector , useDispatch} from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { getdiagnosisreportsdata } from '../../../redux/actions/diagnosis-reports-action-creator';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({

    UserCard: {

        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    }
}));




 export default function Profilecard({ cardData, ...props }) {
    const diagnosis = useSelector((state) => state.diagnosisreportsdata);
    const [vitals, setvitals] = React.useState()
    const dispatch = useDispatch()
    let {id} = useParams ();
    useEffect(()=>{
        dispatch(getdiagnosisreportsdata(id));
        if(diagnosis?.diagnosisreportsData?.length > 0 ){
            setvitals(diagnosis?.diagnosisreportsData?.[0].patientVitals);
        }
        
        
    },[]);
    
    console.log ("vitals",vitals);
    const user = useSelector((state) => state.auth);
    const classes = useStyles()
    let fullName = user.currentUser.firstName + ' ' + user.currentUser.lastName;
    const intials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();

    return (

        <div className="card user-card" >
            <div className="profile-image" >
                {intials}
            </div>
            <h2 className="usercard-title" >{user.role}</h2>
            <p>{user?.currentUser?.firstName} {user?.currentUser?.lastName}</p>
            
            {user.role === 'patient' ?
                <>
                    
                    <span className="profile-data">Weight:{vitals?.weight }</span>
                    <span className="profile-data">Height:{vitals ?.height}</span>
                    <span className="profile-data">Blood Pressure:{vitals ?.bloodPressure}</span>

                </> : ''}
            {user.role === 'physician' ?
                <>
                   
                    {/* <p>Patients:</p><span>{cardData.Patients}</span> */}
                </>
                : ''}
        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//       data: state.patientdata.patientData,
//     };
//   };
//  const mapdispatchToProps = (dispatch) => {
//     return {
//         getdiagnosisreportsdata: (id) => dispatch(getdiagnosisreportsdata(id)),
        
//     };
//   };
//   export default connect( mapdispatchToProps)(Profilecard);