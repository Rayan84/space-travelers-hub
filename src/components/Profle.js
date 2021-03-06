import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

function Profile() {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.missions.filter((mission) => mission.joined === true);
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="display-flex justify-content-space-between">
      <div className="profile-section-container">
        <h2>My Missions</h2>
        <div className="profile-section">
          <ul>
            {joinedMissions.map((mission) => (
              <li className="profile-item" key={mission.mission_id}>{mission.mission_name}</li>
            )) }
          </ul>
        </div>
      </div>
      <div className="profile-section-container">
        <h2>My Rockets</h2>
        <div className="profile-section">
          <ul>
            {reservedRockets.map((rocket) => (
              <li className="profile-item" key={rocket.rocket_id}>{rocket.rocket_name}</li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
