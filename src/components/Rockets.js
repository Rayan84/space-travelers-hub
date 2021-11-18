import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, loadLocal } from '../Redux/rockets/rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocal());
  });
  return (
    <ul className='ul'>
      {rockets.rockets.map((rocket) => {
        return (
          <>
            <li key={rocket._id}>
              <p> {rocket.rocket_id}</p>

              <h2>{rocket.rocket_name}</h2>
              <p>
                <strong>{rocket.description}</strong>
              </p>
              <button
                onClick={() => {
                  dispatch(fetchRockets());
                }}
              >
                Fetch Data
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Rockets;
