import { TextField, Button, Box, Snackbar, Alert } from '@mui/material';
import "./registerOwnership.css"
import NavBar from "../components/Navbar";
import { registerGun } from '../api/data';
import { useContext, useState } from 'react';
import { userContext } from '../auth/ProvideAuth';

const RegisterOwnership = () => {
  const { walletAddress } = useContext(userContext)
  const [gunId, setGunId] = useState('');
  const [showAlert, setShowAlert] = useState(false)
  const handleTransfer = () => {
    setGunId('')
    registerGun(gunId, walletAddress)
    setShowAlert(true)

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }


  return (
    <>
    <NavBar/>
    <div className="ownership-container">
      <div className='form-container'>
          <TextField id="outlined-basic" label="Serial Number" variant="outlined" 
          value={gunId}
          onChange={(e) => setGunId(e.target.value)}/>
          <Button variant="contained" onClick={handleTransfer}>Register</Button>
        </div>
        {showAlert && (
          <Alert severity="success" sx={{ mb: 2, width: 'auto' }}>
            Registration Successful!
          </Alert>
        )}
    </div>
      
    </>
  )
}

export default RegisterOwnership