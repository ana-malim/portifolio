import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'

// API routes
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      {/* when / is passed it will open the Home compnent */ }
        <Route path='/' element={<Home />}/>
        {/* <Route path='/about' element={<UnderDevelopment />} />
        <Route path='/contact' element={<UnderDevelopment />} /> */}
      </Routes>      
      </Router>
    </>
  );
}

export default App;
