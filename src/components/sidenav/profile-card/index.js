import React from 'react'
import './profile-card.css';
import { makeStyles } from '@material-ui/core';
import { useSelector , useDispatch} from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { getdiagnosisreportsdata } from '../../../redux/actions/common-action-creator';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({

    UserCard: {

        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    }
}));




 export default function Profilecard({  ...props }) {
    let {id,role} = useParams ();

    const [vitals, setvitals] = React.useState()
    const dispatch = useDispatch()
    useEffect(()=>{
        if(role == "patient")
        dispatch(getdiagnosisreportsdata(id));
       
           },[]);
    const diagnosis = useSelector((state) => state.diagnosisreportsdata);


    useEffect(()=>{
        if(diagnosis?.diagnosisreportsData?.length > 0 ){
            setvitals(diagnosis?.diagnosisreportsData?.[0].patientVitals);
        }
    },[diagnosis])
    
    const user = useSelector((state) => state.auth);
    const classes = useStyles()
    let fullName = user?.currentUser?.firstName + ' ' + user?.currentUser?.lastName;
    const intials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();

    return (

        <div className="card user-card" >
            <div className="profile-image" >
                {intials}
            </div>
            <p style={{textTransform:'capitalize'}}><b>{user?.currentUser?.role}</b></p>
            <h2 className="usercard-title" >
                {fullName}
            </h2>
            
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
