import React, { createContext, useState, useEffect} from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const authContext= createContext();

const AuthProvider = ({children}) => {

    const [userData,setUserData] = useState(null)

    useEffect(() => {
        const {employees,admins}=getLocalStorage()
        setUserData({employees,admins})
    
    }, [])
    

  return (
    <div>
      <authContext.Provider value={userData}>
        {children}
      </authContext.Provider>
    </div>
  )
}

export default AuthProvider
