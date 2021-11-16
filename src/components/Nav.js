import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from 'react-router-dom';
import Rockets from './Rockets';

const Nav = () => (
  <Router>
    <ul>
      <li><NavLink to="/">Rockets</NavLink></li>
      <li />
    </ul>
    <Routes>
      <Route path="/" element={<Rockets />} />
    </Routes>
  </Router>
);

export default Nav;
