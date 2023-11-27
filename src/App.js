import React from 'react';

import logo from './logo.svg';
import './App.css';
import FlightInputBox2 from './FlightInputBox2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FlightInputBox2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
