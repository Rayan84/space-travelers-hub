import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
} from 'react-router-dom';
import Rockets from './Rockets';

const Nav = () => (
  <Router>
    <ul>
      <li><Link to="/">Rockets</Link></li>
      <li />
    </ul>
  <Routes>
    <Route path="/" element={<Rockets />} />
    </Routes>
  </Router>
);

export default Nav;
