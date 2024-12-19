import React, { useEffect, useState, useContext} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { authContext } from './context/AuthProvider'

// import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(authContext)

// useEffect(() => {
//   if(authData){
//     const loggedInUser = localStorage.getItem("loggedInUser")
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//     }
//   }
// }, [authData])


  const handleLogin = (email,password) =>{
    if(email== 'admin@me.com' && password=='1234'){
      setUser({role:'admin'})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      authData.employees.find((e)=> email==e.email && password==e.password)
      if(employee){
        setUser({role:'employee'})
      }
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }else{
      alert("Invalid Credentials")
    }
  }
 

  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // },
  // )

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user=='admin'?<AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App
