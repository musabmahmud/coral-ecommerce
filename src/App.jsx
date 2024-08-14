import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
