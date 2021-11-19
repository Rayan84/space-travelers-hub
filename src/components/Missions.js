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

  return (
    <>
      <table className="missions-table">
        <thead>
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {missions.missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>NOT A MEMBER</td>
              <td><button type="button">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
