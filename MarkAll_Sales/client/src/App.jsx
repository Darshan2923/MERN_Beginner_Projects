import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css'
import CreateBlog from './components/pages/CreateBlog'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createBlog" element={<CreateBlog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App