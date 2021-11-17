import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar">
      <div>
        <img src="assets/images/planet.png" alt="logo" />
      </div>
      <Link key="1" to="/">
        Rockets
      </Link>
      <Link key="2" to="/missions">
        Missions
      </Link>
      <Link key="3" to="/my-profile">
        My Profile
      </Link>
    </div>
  );
}

export default Nav;
