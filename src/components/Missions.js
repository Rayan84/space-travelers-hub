import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { fetchMissions } from '../Redux/missions/missions';
// import store from '../Redux/configureStore';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  //  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.missions.length === 0) {
      // const initialFetch = async () => {
      //   await dispatch(fetchMissions());
      // };
      // initialFetch();
    } else {
      console.log('============');
      console.log(missions.missions.length);
    }
  });
  // store.dispatch(fetchMissions());
  // document.onload(dispatch(fetchMissions()));

  return missions.missions.map((mission) => (
    <>
      <li key={mission.id}>
        <p>
          {' '}
          {mission.mission_id}
        </p>

        <h2>{mission.mission_name}</h2>
        <p>
          <strong>{mission.description}</strong>
        </p>
      </li>
      <button
        type="button"
      >
        Fetch Data
      </button>
    </>
  ));
};

export default Missions;
