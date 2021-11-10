import * as React from 'react';
import Box from '@mui/material/Box';
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
   
//Patient
  borderRadius: 5,
  textAlign: 'center',
  boxShadow: '0 30px 60px 0 rgb(0 0 0 / 30%)'
};

export default function BasicModal(props) {

  return (
    <div>
      <Modal
        open={props.state}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.children}
        </Box>
        
      </Modal>
    </div>
  );
}