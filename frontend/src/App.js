// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import    "./App.css";
import Navbar from './components/Navbar';
// import NotFound from './pages/NotFound';

function App() {
  return (
      <Routes>
        <Route path="/" element={null} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
  );
}

export default App;
