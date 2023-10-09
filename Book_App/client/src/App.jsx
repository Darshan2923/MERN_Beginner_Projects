import './App.css'
import { Routes, Route } from 'react-router-dom';
import CreateBook from './components/CreateBook';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createBooks" element={<CreateBook />} />
      </Routes>
    </>
  );
}

export default App
