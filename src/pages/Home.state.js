import { useState, useContext } from "react"
import { fetchGuns } from "../api/data";
import { userContext } from "../auth/ProvideAuth";

const useHome = () => {
  const [gunsSerialNumber, setGunsSerialNumber] = useState(null)
  console.log(useContext(userContext))
  const { walletAddress } = useContext(userContext);
  
  const getGuns = async () => {
    const { registeredGuns } = await fetchGuns(walletAddress)
    setGunsSerialNumber(registeredGuns)
    return registeredGuns
  }


  return { walletAddress, getGuns, gunsSerialNumber }
}

export default useHome