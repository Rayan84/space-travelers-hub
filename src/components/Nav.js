import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import Profile from './Profle';
import Rockets from './Rockets';
import Missions from './Missions';
// import { fetchMissions } from '../Redux/missions/missions';

const Nav = () => {
//  const dispatch = useDispatch();
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
      <>
        <ul className="navbar" onLoad="">
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
          <li>
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
      </>
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
