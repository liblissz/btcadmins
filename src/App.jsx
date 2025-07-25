import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './pages/Admin/Admin'
import Login from './Components/Login/Login'
import { Toaster } from 'react-hot-toast'

const App = () => {
  
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
     {
       localStorage.getItem("token")?  <>
      <Navbar/>
      <Admin/>
      </>:
       <Login/>
     
      }
    </div>
  )
}

export default App
