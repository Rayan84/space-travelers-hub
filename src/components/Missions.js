import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, loadLocal } from '../Redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocal());
  });
  return missions.missions.map((mission) => {
    return (
      <>
        <li key={mission._id}>
          <p> {mission.mission_id}</p>

          <h2>{mission.mission_name}</h2>
          <p>
            <strong>{mission.description}</strong>
          </p>
        </li>
        <button
          onClick={() => {
            dispatch(fetchMissions());
          }}
        >
          Fetch Data
        </button>
      </>
    );
  });
};

export default Missions;
