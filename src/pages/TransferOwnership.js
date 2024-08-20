import { TextField, Button } from '@mui/material';
import "./transferOwnership.css"
import NavBar from "../components/Navbar";
import { transferOwnership } from '../api/data';

const TransferOwnership = () => {
  return (
    <>
    <NavBar/>
    <div className='transfer-container'>
     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
     <Button variant="contained" onClick={transferOwnership}>Transfer</Button>
    </div>
    </>
  )
}

export default TransferOwnership