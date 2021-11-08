import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './add-patient.css';
import Button from '@mui/material/Button';
import { Container } from '@material-ui/core';


export default function Addpatient({ handleChange, handleSubmit, userData }) {


  return (
    <form onSubmit={handleSubmit} >
      <Container >
        <div className="text-fields">
          <TextField
            label="First Name"
            id="firstName"
            name="firstName"
            size="small"
            onChange={handleChange}
            value={userData.firstName}
            required
            
          />
        </div>
        <div className="text-fields">
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            size="small"
            onChange={handleChange}
            value={userData.lastName}
            required
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
            label="Email Address"
            id="email"
            name="email"
            size="small"
            onChange={handleChange}
            value={userData.email}
            required
          />
        </div>
        <div className="text-fields">
          <TextField
            label="Password"
            id="password"
            name="password"
            size="small"
            type="password"
            onChange={handleChange}
            value={userData.password}
            required
          />         
        </div>
        <div className="text-fields">
          <TextField
            label="Re-Type Password"
            id="retypePassword"
            name="retypePassword"
            size="small"
            type="password"
            onChange={handleChange}
            value={userData.retypePassword}
           required
          />
        </div>
        <div className="text-fields">
          <TextField
            label="Contact"
            id="contact"
            name="contact"
            size="small"
            onChange={handleChange}
            value={userData.contact}
            required
          />
        </div>        
      </Container>
      <Button type="submit" variant="text" style={{ margin: '0', Padding: '0' }}><span className="button1">Submit</span></Button>
    </form>
  );

}
