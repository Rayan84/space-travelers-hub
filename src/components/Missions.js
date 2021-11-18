import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from '../Redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <>
      
        <>
          <div className="missions-container">
            <h2>Missions</h2>
            <p>{missions}</p>

              {/* missions.missions.map((item) => (
                <Mission data={item} key={item.id} />
              )) */}

          </div>
        </>
      

    </>

  );
};

export default Missions;
