import { createContext, useCallback, useState } from "react";
import { login as loginService } from "../services/AuthService";
import { setAccessToken } from "../stores/AccessTokenStore";


const AuthContext = createContext()

export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = useCallback((data) => {
    return loginService(data)
      .then(response => {
        // Guardo el token en el store que hemos creado para que sea accesible a los servicios
        setAccessToken(response.accessToken)
      })
      .catch(err => console.error(err))
  }, [])

  const contextValue = {
    login
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
