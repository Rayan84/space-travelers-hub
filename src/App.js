import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Nav from './components/Nav';
import Rocket from './components/Rocket';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
