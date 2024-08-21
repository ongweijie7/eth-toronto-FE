import { Paper } from '@mui/material';
import ak47 from '../assets/ak47.webp'
import { fetchHistory } from '../api/data'

const RegisteredTab = ({ gun }) => {

  const handleTabClick = async () => {
    console.log(gun)
    const a = await fetchHistory(gun)
    console.log(a)
  }

  return (
    <Paper elevation={6} sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      '&:hover': {
          backgroundColor: '#f0f0f0',
          transform: 'scale(1.05)',
      },
      padding: 2,
      // bgcolor: 'lightgrey',
      margin: '10px',
      width: '500px'
    }}>
      <img src={ak47} alt="ak47" width="100" height="100"/>
      <span>{gun}</span>
    </Paper>
  )
}

export default RegisteredTab