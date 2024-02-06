// src/App.js
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Proposal from './components/Proposal';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  return (
    <Router>
          <footer className='text-right font-bold text-sm text-blue-700 px-4 mt-4'>Developed By @Raghubir</footer>
    <Routes>
      <Route path="/" element={<Proposal />} />
      <Route path="/confirmation" element={<ConfirmationPage />}
      />
    </Routes>
  </Router>

  );
}

export default App;
