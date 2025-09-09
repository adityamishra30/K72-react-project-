import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Projects from './pages/Projects';

const App = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agence" element={<Agence />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
