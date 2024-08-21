import React, { useState } from 'react';
import { Button, TextField, Modal, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TransferModal = ({ open, handleClose, handleConfirm }) =>{
  const [walletAddress, setWalletAddress] = useState('');

  const handleInputChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const handleConfirmClick = () => {
    handleConfirm(walletAddress);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="transfer-modal-title"
      aria-describedby="transfer-modal-description"
    >
      <Box sx={style}>
        <Typography id="transfer-modal-title" variant="h6" component="h2">
          Enter Wallet Address
        </Typography>
        <TextField
          id="wallet-address"
          label="Wallet Address"
          variant="outlined"
          fullWidth
          value={walletAddress}
          onChange={handleInputChange}
          margin="normal"
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleConfirmClick} 
          fullWidth
        >
          Confirm
        </Button>
      </Box>
    </Modal>
  );
}

export default TransferModal;