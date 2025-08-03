import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import OrderForm from './pages/OrderForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/orderform' element={<OrderForm/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
