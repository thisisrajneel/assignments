import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { lazy } from 'react'
const Card = lazy(() => import('./pages/Card/Card'))
const Background = lazy(() => import('./pages/Background/Background'))
const Para = lazy(() => import('./pages/Para'))
const Login = lazy(() => import('./pages/Login'))

function App() {
  
  return (
    <BrowserRouter>
      
      <Navbar />

      <Routes>
        <Route path="/Background" element={<Background />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Para" element={<Para />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className='navContainer'>
          <button className='navButton' onClick={() => navigate('/Background')}>Background</button>
          <button className='navButton' onClick={() => navigate('/Card')}>Card</button>
          <button className='navButton' onClick={() => navigate('/Para')}>Para</button>
          <button className='navButton' onClick={() => navigate('/Login')}>Login</button>
      </nav>
    </>
  )
}

export default App
