
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import Pnf from './pages/pnf'

function App() {
 

  return (
    <>
    <Header/>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Pnf />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
