import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinLeaveMission } from '../Redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  return (
    <>
      <table className="missions-table">
        <thead>
          <tr>
            <td>Mission</td>
            <td className="discription-column">Description</td>
            <td>Status</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {missions.missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="name-column">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td><span className={mission.joined ? ('status-joined') : ('status-not-joined')}>{mission.joined ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}</span></td>
              <td className="join-button-container text-align-center">
                <button type="button" className={mission.joined ? ('button-joined') : ('button-not-joined')} onClick={() => { dispatch(joinLeaveMission(mission.mission_id)); }}>{mission.joined ? ('Leave Mission') : ('Join Mission') }</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
