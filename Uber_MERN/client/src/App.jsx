import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainRegister from './pages/CaptainRegister'
import CaptainLogin from './pages/CaptainLogin'
import Landing from './pages/Landing'
import UserProtectWrapper from './pages/UserProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-register" element={<UserSignup />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/captain-register" element={<CaptainRegister />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Landing />
          </UserProtectWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App