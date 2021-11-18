import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import fetchMissions from '../Redux/missions/missions';
import { loadLocal } from '../Redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocal());
  },);
  return missions.missions.map((mission) => {
    return (
      <li key={mission._id}>
        <a href={"#" + mission._id}>
        </a>

        <p>
          <a href="#">{mission.name}</a>
        </p>
        <p>
          <strong>${mission.description}.00</strong>
        </p>
      </li>
    );
  });
};

export default Missions;
