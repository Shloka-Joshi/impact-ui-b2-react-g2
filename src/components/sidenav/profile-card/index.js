import React from 'react'
import './profile-card.css';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
// import  avatar  from '../../../assets/images/avatar.jpge';

const useStyles = makeStyles((theme) => ({

    UserCard: {

        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    }
}));




export default function Profilecard({ cardData, ...props }) {

    const user = useSelector((state) => state.auth);
    const classes = useStyles()
    //const cardData = props.cardData;
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
                    
                    <span className="profile-data">Weight:{cardData.Weight}</span>
                    <span className="profile-data">Height:{cardData.Height}</span>
                    <span className="profile-data">Blood Pressure:{cardData.BloodPressure}</span>

                </> : ''}
            {user.role === 'physician' ?
                <>
                   
                    <p>Patients:</p><span>{cardData.Patients}</span>
                </>
                : ''}
        </div>
    )
}
