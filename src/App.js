// src/App.js
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Proposal from './components/Proposal';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  return (
    <Router>
          <h1 
          className='fixed'
          style={{ fontSize: '0.50rem' }}>Disclaimer:-pls don't offend</h1>
    <Routes>
      <Route path="/" element={<Proposal />} />
      <Route path="/confirmation" element={<ConfirmationPage />}
      />
    </Routes>
    <footer className='text-black text-sm text-center py-4 fixed bottom-0 w-full'>Developed By @RK</footer>
  </Router>

  );
}

export default App;
