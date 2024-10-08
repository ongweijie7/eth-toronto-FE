import { Paper, Button } from '@mui/material';
import ak47 from '../assets/ak47.webp'
import { fetchHistory } from '../api/data'


const Tab = ({ gun, openModal }) => {

  const handleTabClick = async () => {
    console.log(gun)
    const a = await fetchHistory(gun)
    console.log(a)
  }

  return (
    <Paper elevation={6} 
    onClick={handleTabClick}
    sx={{
      display: 'flex',
      cursor: 'pointer',
      '&:hover': {
          backgroundColor: '#f0f0f0',
          transform: 'scale(1.05)',
      },
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 2,
      // bgcolor: 'lightgrey',
      margin: '10px',
      width: '500px'
    }}>
      <img src={ak47} alt="ak47" width="100" height="100"/>
      <span>{gun}</span>
      <Button sx={{margin:'10px'}} onClick={openModal} variant="contained">Transfer</Button>
    </Paper>
  )
}

export default Tab