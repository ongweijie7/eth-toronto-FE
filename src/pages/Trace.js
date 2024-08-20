import useTrace from "./Trace.state"
import { useEffect } from "react"
import "./trace.css"
import Navbar from "../components/Navbar"

const Trace = () => {
  const { registeredGuns, getRegisteredGuns } = useTrace()

  useEffect(() => {
    getRegisteredGuns()
  }, [])

  return (
    <>
      <Navbar />
      <div className="trace-container">
        <h1>Trace Page</h1>
        {registeredGuns ? registeredGuns.map((registeredGun, index) => <h3 key={index}>{registeredGun.serialNum}</h3>) : null}
    </div>
    </>
  )
}

export default Trace