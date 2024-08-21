import { useEffect, useContext } from 'react'
import { userContext } from '../auth/ProvideAuth'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Box, Typography, Grid } from '@mui/material';
import metamaskLogo from '../assets/metamask.png'

const Login = () => {
  const { walletAddress, getWalletAddress } = useContext(userContext);
  const navigate = useNavigate()

  const handleLogin = async () => {
    await getWalletAddress()
  }

  useEffect(() => {
    if (walletAddress) {
      navigate('/')
    }
  }, [walletAddress])

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        flexDirection="column"
      >
        <Typography variant="h4" gutterBottom>
          Login with MetaMask
        </Typography>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item>
            <img 
              src={metamaskLogo} 
              alt="MetaMask Logo" 
              style={{ width: 50, height: 50 }} 
            />
          </Grid>
          <Grid item>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleLogin}
              size="large"
            >
              Login with MetaMask
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>

  )
}

export default Login