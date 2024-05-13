import { Navigate, Route , Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
import Home from './pages/home/Home'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'
function App() {
  const {authUser}=useAuthContext();
  return (
    
    <div className='p-4 h-screen flex items-center justify-center'>
      <Toaster />
    <Routes>
      <Route path='/' element= {authUser ? <Home /> : <Navigate to="/login" />}  />
      <Route path='/login' element= {authUser ? <Navigate to="/" /> :<Login />} />
      <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />}/>
    </Routes>
  </div>
  )
}

export default App
