import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { login as loginService } from "../services/AuthService";
import { getAccessToken, setAccessToken } from "../stores/AccessTokenStore";
import { getCurrentUser } from "../services/UserService";

const AuthContext = createContext()

export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthFetched, setIsAuthFetched] = useState(false);

  const fetchCurrentUser = useCallback(() => {
    getCurrentUser()
      .then(user => {
        setUser(user)
      })
      .catch(err => console.error(err))
      .finally(() => {
        setIsAuthFetched(true)
      });
  }, [])

  const login = useCallback((data) => {
    return loginService(data)
      .then(response => {
        // Guardo el token en el store que hemos creado para que sea accesible a los servicios
        setAccessToken(response.accessToken)
      })
      .then(() => {
        return fetchCurrentUser()
      })
      .catch(err => console.error(err))
  }, [fetchCurrentUser])

  useEffect(() => {
    if (getAccessToken()) {
      fetchCurrentUser()
    } else {
      setIsAuthFetched(true);
    }
  }, [fetchCurrentUser])

  const contextValue = useMemo(() => ({
    isAuthFetched,
    user,
    login
  }), [isAuthFetched, user, login]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
