import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bol">Welcome to MusicBase!</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
