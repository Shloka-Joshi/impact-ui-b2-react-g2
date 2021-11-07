import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './add-physician.css';
import Button from '@mui/material/Button';


export default function Addpatient({ handleChange, handleSubmit, userData }) {
  return <form onSubmit={handleSubmit} >
    <div className="text-fields">
      <TextField
        label="First Name"
        id="firstName"
        size="small"
        onChange={handleChange}
        value={userData.firstName}
        required
      />
    </div>
    <div className="text-fields">
      <TextField
        label="Last Name"
        id="lastName"
        size="small"
        onChange={handleChange}
        value={userData.lastName}
        required
      />
    </div>

    <div className="text-fields">
      <TextField
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
        size="small"
        onChange={handleChange}
        value={userData.contact}
        required
      />
    </div>
    <Button type="submit" variant="text" style={{ margin: '0', Padding: '0' }}><span className="button1">Submit</span></Button>
  </form>
}
