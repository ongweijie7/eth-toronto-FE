import "./home.css"
import { useEffect } from "react";
import useHome from "./Home.state";
import Navbar from "../components/Navbar";
import Tab from "../components/Tab";

const Home = () => {
  const { walletAddress, getGuns, gunsSerialNumber } = useHome()

  useEffect(() => {
    getGuns()
  }, [])

  return (
    <>
    <Navbar/>
    <div className="home-container">
      {walletAddress ? <h2>Wallet address: {walletAddress}</h2> : null}
      {gunsSerialNumber ? gunsSerialNumber.map((gun, index) => <Tab key={index} gun={gun}/>) : null}
    </div>
    </>

  )
}

export default Home