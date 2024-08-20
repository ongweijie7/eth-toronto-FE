import { Paper, Button } from '@mui/material';
import ak47 from '../assets/ak47.webp'


const Tab = ({ gun }) => {
  return (
    <Paper elevation={6} sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 2,
      // bgcolor: 'lightgrey',
      margin: '10px',
      width: '500px'
    }}>
      <img src={ak47} alt="ak47" width="100" height="100"/>
      <span>{gun}</span>
      <Button sx={{margin:'10px'}}variant="contained">Transfer</Button>
    </Paper>
  )
}

export default Tab