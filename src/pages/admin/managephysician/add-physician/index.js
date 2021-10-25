import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './add-physician.css';
import Button from '@mui/material/Button';


export default function Addpatient({ handleChange, handleSubmit, userData }) {

  return <form onSubmit={handleSubmit} >
    <div>
      <TextField
        label="First Name*"
        id="firstName"
        size="small"
        onChange={handleChange}
        value={userData.firstName}
      />
    </div>
    <div>
      <TextField
        label="Last Name*"
        id="lastName"
        size="small"
        onChange={handleChange}
        value={userData.lastName}

      />
    </div>
    <div>
      <TextField
        type="date"
        id="dob"
        size="small"
        onChange={handleChange}
        value={userData.dob}

      >Date of Birth</TextField>
    </div>
    <div>
      <TextField
        label="Email Address*"
        id="email"
        size="small"
        onChange={handleChange}
        value={userData.email}

      />
    </div>
    <div>
      <TextField
        label="Password*"
        id="password"
        size="small"
        type="password"
        onChange={handleChange}
        value={userData.password}

      />
    </div>
    <div>
      <TextField
        label="Re-Type Password*"
        id="retypePassword"
        size="small"
        type="password"
        onChange={handleChange}
        value={userData.retypePassword}

      />
    </div>
    <div>
      <TextField
        label="Contact*"
        id="contact"
        size="small"
        onChange={handleChange}
        value={userData.contact}

      />

    </div>
    <Button type="submit" variant="text" style={{ margin: '0', Padding: '0' }}><span className="button1">Submit</span></Button>
  </form>
}
