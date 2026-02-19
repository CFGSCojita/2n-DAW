import { createContext, useContext, useEffect, useState } from "react";
import { 
  login as firebaseLogin,
  logout as firebaseLogout,
  register as firebaseRegister,
  listenAuthChanges 
} from "../firebase/services/authService";

import { createUser, getUser } from '../firebase/services/userService'

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [usuari, setUsuari] = useState(null);
  const [carregant, setCarregant] = useState(true);

  useEffect(() => {
    const unsuscribe = listenAuthChanges(async (firebaseUser) => {
      if (firebaseUser) {
        const userData = await getUser(firebaseUser.uid);

        if (!userData) {
          await createUser(firebaseUser.uid, firebaseUser.email);
        }

        setUsuari({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          role: userData?.role || 'alumnat'
        })

      } else {
        setUsuari(null)
      }
      
      setCarregant(false)
    })
    return unsuscribe
  }, [])

  function login(email, password) {
    return firebaseLogin(email, password);
  }

  function register(email, password) {
    return firebaseRegister(email, password);
  }

  function logout() {
    return firebaseLogout();
  }

  const value = {
    usuari,
    login,
    register,
    logout,
    carregant
  }

  return (
    <div>
        <AuthContext.Provider value={value}>
            { !carregant && children}
        </AuthContext.Provider>
    </div>
  )
}

export function useAuth() {
    return useContext(AuthContext);
}
