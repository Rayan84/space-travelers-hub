import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from 'react-router-dom';
import Profile from './Profle';
import Rockets from './Rockets';
import Missions from './Missions';

const Nav = () => {
  function linkStyle(num) {
    const links = document.querySelectorAll('.nav-link');
    for (let i = 0; i < links.length; i += 1) {
      if (i !== num) {
        links[i].style.textDecoration = 'none';
      } else {
        links[i].style.textDecoration = 'underline';
      }
    }
  }

  return (
    <Router>
      <div className="display-flex justify-content-space-between nav-container">
        <img src="logo.png" className="App-logo" alt="logo" />
        <ul className="navbar">
          <li>
            <NavLink
              to="/rockets"
              className="nav-link"
              onClick={() => {
                linkStyle(0);
              }}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              className="nav-link"
              onClick={() => {
                linkStyle(1);
              }}
            >
              Missions
            </NavLink>
          </li>
          <li className="border-left">
            <NavLink
              to="/profile"
              className="nav-link"
              onClick={() => {
                linkStyle(2);
              }}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </Router>
  );
};

export default Nav;
