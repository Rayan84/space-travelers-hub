import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from 'react-router-dom';
import Rockets from './Rockets';
import Reservations from './Reservations';

const Nav = () => {
  function linkStyle(num) {
    let links = document.querySelectorAll('.nav-link');   
    for (let i = 0; i < links.length; i++){
      if(i !== num){
        links[i].style.textDecoration = 'none';
      }else{
        links[i].style.textDecoration = 'underline';
      }
    }
  };

return(
  <Router>
    <>
    <ul className="navbar">
      <li><NavLink to="/rockets" className="nav-link" onClick={() => {linkStyle(0)}}>Rockets</NavLink></li>
      <li><NavLink to="/reservations" className="nav-link" onClick={() => {linkStyle(1)}}>Reservations</NavLink></li>
    </ul>
    </>
    <Routes>
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/" element={<Rockets />} />

    </Routes>
  </Router>
);
      };

export default Nav;
