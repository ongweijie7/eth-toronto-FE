import { useState } from "react"
import { fetchRegisteredGuns } from "../api/data";

const useTrace = () => {
  const [registeredGuns, setRegisteredGuns] = useState(null)

  const getRegisteredGuns = async () => {
    const { registeredGuns } = await fetchRegisteredGuns()
    setRegisteredGuns(registeredGuns)
    return registeredGuns
  }

  return { registeredGuns, getRegisteredGuns }
}

export default useTrace