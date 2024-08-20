import { useContext } from 'react';
import { userContext } from '../auth/ProvideAuth';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
  console.log(useContext(userContext))
  const { walletAddress } = useContext(userContext);
  if (!walletAddress) {
    return <Navigate to="/login" />;
  }

  return ( <Component />);
};

export default ProtectedRoute;