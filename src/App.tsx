import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';

function App() {

  return (
    <div className="App">
      <h1>Welcome to MusicBase!</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
