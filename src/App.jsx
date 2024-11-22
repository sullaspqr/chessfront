import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import { ChessList } from './ChessList';

export const App=()=> {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav"> 
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Sakkozók</NavLink>
            </li>
          </ul>
          </div>
      </nav>
      <Routes>
        <Route path="/" element={<ChessList />} />
      </Routes>
    </Router>
  );
}
