import { useState, useEffect } from "react";

const useProvideAuth = () => {
  const [walletAddress, setWalletAddress] = useState(null)

  const getWalletAddress = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setWalletAddress(accounts[0])
        console.log('MetaMask connected')
        return accounts[0]
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.log("MetaMask is not installed");
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log('Account changed');
        } else {
          setWalletAddress(null); // User has disconnected their account
          console.log('MetaMask disconnected');
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);

      // Cleanup event listener when component unmounts
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, []);

  return {
    walletAddress,
    getWalletAddress,
    setWalletAddress
  }
}

export default useProvideAuth