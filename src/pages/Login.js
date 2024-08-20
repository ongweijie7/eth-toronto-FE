import { useEffect, useContext } from 'react'
import { userContext } from '../auth/ProvideAuth'
import { useNavigate } from 'react-router-dom'

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
    <div className="container">
      <button className="button" onClick={() => handleLogin()}>
        Login with MetaMask
      </button>
    </div>
  )
}

export default Login