import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import './App.css'
import CreateRecipe from './pages/CreateRecipe';
import SavedRecipe from './pages/SavedRecipe';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/create-recipe' element={<CreateRecipe />} />
        <Route path='/saved-recipe' element={<SavedRecipe />} />
      </Routes>
    </>
  )
}

export default App