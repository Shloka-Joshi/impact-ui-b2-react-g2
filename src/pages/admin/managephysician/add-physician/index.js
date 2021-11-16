import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './add-physician.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
 position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #19a3c6',
  borderRadius:5,
  p: 4,
  textAlign: 'center',
  boxShadow: '0 30px 60px 0 rgb(0 0 0 / 30%)'
}; 


export default function Addpatient({ handleChange, handleSubmit, userData }) {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
  <>
  <form onSubmit={handleSubmit} >
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
    <Button type="submit" variant="text" style={{ margin: '0', Padding: '0' }} onClick={handleOpen}><span className="button1">Submit</span></Button>
  
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Successful
          </Typography>
        </Box>
      </Modal>
  </form>
  </>)
}
