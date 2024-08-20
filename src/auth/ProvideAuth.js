import { createContext } from "react";
import useProvideAuth from "./ProvideAuth.state";

const userContext = createContext()

const AuthContext = ({ children }) => {
  const authContext = useProvideAuth()

  return (
    <userContext.Provider value={authContext}>
      {children}
    </userContext.Provider>
  )
}

export { userContext, AuthContext }