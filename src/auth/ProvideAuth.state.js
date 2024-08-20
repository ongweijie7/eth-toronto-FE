import { useState } from "react";

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

  return {
    walletAddress,
    getWalletAddress,
    setWalletAddress
  }
}

export default useProvideAuth