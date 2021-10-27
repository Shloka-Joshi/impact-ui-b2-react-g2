import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useformik} from 'formik';
import './add-patient.css';
import Button from '@mui/material/Button';
import { Container } from '@material-ui/core';


export default function Addpatient({ handleChange, handleSubmit, userData }) {
  // const formik =useformik({
  //   intialValues:{
  //     firstName:"",
  //     lastName:"",
  //     dob:"",
  //     email:"",
  //     password:"",
  //     retypePassword:"",
  //     contact:""
  //   }
  // })

  return <form onSubmit={handleSubmit} >
    <Container >
    <div className="text-fields">
      <TextField
        label="First Name*"
        id="firstName"
        size="small"
        onChange={handleChange}
        value={userData.firstName}
      />
    </div>
    <div className="text-fields">
      <TextField
        label="Last Name*"
        id="lastName"
        size="small"
        onChange={handleChange}
        value={userData.lastName}

      />
    </div>
    <div className="text-fields">
      <TextField
      label=""
        type="date"
        id="dob"
        size="small"
        onChange={handleChange}
        value={userData.dob}

      >Date of Birth</TextField>
    </div>
    <div className="text-fields">
      <TextField
        label="Email Address*"
        id="email"
        size="small"
        onChange={handleChange}
        value={userData.email}

      />
    </div>
    <div className="text-fields">
      <TextField
        label="Password*"
        id="password"
        size="small"
        type="password"
        onChange={handleChange}
        value={userData.password}

      />
    </div>
    <div className="text-fields">
      <TextField
        label="Re-Type Password*"
        id="retypePassword"
        size="small"
        type="password"
        onChange={handleChange}
        value={userData.retypePassword}

      />
    </div>
    <div className="text-fields">
      <TextField
        label="Contact*"
        id="contact"
        size="small"
        onChange={handleChange}
        value={userData.contact}

      />
    </div>
    </Container>
    <Button type="submit" variant="text" style={{ margin: '0', Padding: '0' }}><span className="button1">Submit</span></Button>
  </form>
}
