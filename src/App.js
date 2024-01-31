// src/App.js
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Proposal from './components/Proposal';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Proposal />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  </Router>
  );
}

export default App;