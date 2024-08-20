import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";

import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import "./navbar.css";

import { Typography } from '@mui/material';
import { useContext } from "react";
import { userContext } from "../auth/ProvideAuth";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Transfer Ownership",
    path: "/transfer",
    icon: <BiIcons.BiTransferAlt />,
    cName: "nav-text"
  },
  {
    title: "Trace",
    path: "/trace",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  }
]

const Navbar = () => {
  const { walletAddress } = useContext(userContext);
  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars />
          </Link>
        </div>
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            <div className="nav-title">
              <Typography variant="h5" align='center' className="nav-title">GunFlow</Typography>
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} 
                className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;