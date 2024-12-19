import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    console.log("email is",email);
    console.log("password is",password);
    
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-400 p-20 rounded-md'>
        <form 
        onSubmit={(e)=>
          submitHandler(e)
        }
        className='flex flex-col items-center justify-center'>
          <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }} 
          required 
          className='outline-none bg-transparent border-2 border-emerald-500 rounded-full py-3 px-5 text-xl placeholder:text-gray-300' type='email' placeholder='Enter Your Email'
          />

          <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
           required 
           className='outline-none bg-transparent border-2 border-emerald-500 rounded-full py-3 px-5 text-xl mt-5 placeholder:text-gray-300' type='password' placeholder='Enter Your Password'/>
          <button className='outline-none border-2 border-none bg-emerald-500 rounded-full py-3 px-5 text-xl mt-5 placeholder:text-gray-300'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
