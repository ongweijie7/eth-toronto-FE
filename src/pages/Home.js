import "./home.css"
import { useEffect, useState } from "react";
import useHome from "./Home.state";
import Navbar from "../components/Navbar";
import Tab from "../components/Tab";
import TransferModal from "../components/TransferModal";
import { transferOwnership } from "../api/data";

const Home = () => {
  const { walletAddress, getGuns, gunsSerialNumber } = useHome()
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    getGuns()
  }, [walletAddress])

  const openModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }


  return (
    <>
    <Navbar/>
    <div className="home-container">
      {walletAddress ? <h2>Wallet address: {walletAddress}</h2> : null}
      {gunsSerialNumber ? gunsSerialNumber.map(
      (gun, index) => {
        const handleConfirm = (newAddress) => {
          transferOwnership(gun, walletAddress, newAddress)
        }
        return (
          <>
          <Tab key={index} gun={gun} openModal={openModal}/>
          <TransferModal 
            open={modalOpen} 
            handleClose={handleCloseModal} 
            handleConfirm={handleConfirm} 
          />
          </>
        )
      }
      ) : null}
    </div>
    </>

  )
}

export default Home