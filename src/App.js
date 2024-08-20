import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import TransferOwnership from './pages/TransferOwnership';
import Trace from './pages/Trace'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContext } from './auth/ProvideAuth';

function App() {

  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<ProtectedRoute Component={Home}/>} />
          <Route path="/transfer" element={<ProtectedRoute Component={TransferOwnership} />} />
          <Route path="/trace" element={<ProtectedRoute Component={Trace} />} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
