import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

function Profile() {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.missions.filter((mission) => mission.joined === true);
  return (
    <div className="display-flex">
      <div>
        <h2>My Missions</h2>
        <div>
          <ul>
            {joinedMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            )) }
          </ul>
        </div>
      </div>
      <div>
        <h2>My Rockets</h2>
        <div>
          <ul>
            {joinedMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
