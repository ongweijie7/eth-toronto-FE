import useTrace from "./Trace.state"
import { useEffect } from "react"
import "./trace.css"
import Navbar from "../components/Navbar"
import RegisteredTab from "../components/RegisteredTab"

const Trace = () => {
  const { registeredGuns, getRegisteredGuns } = useTrace()

  useEffect(() => {
    const h = getRegisteredGuns()
    console.log(h)
  }, [])

  return (
    <>
      <Navbar />
      <div className="trace-container">
        <h1>All Registered Weapons</h1>
        {registeredGuns ? registeredGuns.map((gun, index) => <RegisteredTab key={index} gun={gun.serialNum}/>) : null}
    </div>
    </>
  )
}

export default Trace