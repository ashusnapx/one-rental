// /src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Correct import path
import Dashboard from './pages/Dashboard';
import RenterPage from './pages/RenterPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/renter/:id" element={<RenterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
