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




 export default function Profilecard({  ...props }) {
    // const diagnosis = useSelector((state) => state.diagnosisreportsdata);
    const [vitals, setvitals] = React.useState()
    const dispatch = useDispatch()
    let {id} = useParams ();
    // useEffect(()=>{
    //     dispatch(getdiagnosisreportsdata(id));
       
    //        },[]);

    // useEffect(()=>{
    //     if(diagnosis?.diagnosisreportsData?.length > 0 ){
    //         console.log(vitals)
    //         setvitals(diagnosis?.diagnosisreportsData?.[0].patientVitals);
    //     }
    // },[diagnosis])
    
    console.log ("vitals",vitals);
    const user = useSelector((state) => state.auth);
    console.log(user);
    const classes = useStyles()
    let fullName = user?.currentUser?.firstName + ' ' + user?.currentUser?.lastName;
    const intials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();

    return (

        <div className="card user-card" >
            <div className="profile-image" >
                {intials}
            </div>
            <h2 className="usercard-title" >
                {fullName}
            </h2>
            <p></p>
            
            {user.role === 'patient' ?
                <>

                </> : ''}
            {user.role === 'physician' ?
                <>
                   
                </>
                : ''}
        </div>
    )
}
