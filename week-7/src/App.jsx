import Card from './pages/Card/Card'
import Background from './pages/Background/Background'
import Para from './pages/Para'
import Login from './pages/Login'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <nav className='navContainer'>
          <div className='navButton'>
            <Link to="/Background">Background</Link>
          </div>
          <div className='navButton'>
            <Link to="/Card">Card</Link>
          </div>
          <div className='navButton'>
            <Link to="/Para">Para</Link>
          </div>
          <div className='navButton'>
            <Link to="/Login">Login</Link>
          </div>
      </nav>


      <Routes>
        <Route path="/Background" element={<Background />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Para" element={<Para />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
