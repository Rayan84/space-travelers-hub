import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, loadLocal } from '../Redux/rockets/rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocal());
  });
  return (
    <ul className="ul">
      {rockets.rockets.map((rocket) => (
        <>
          <li key={rocket.id}>
            <p>
              {' '}
              {rocket.rocket_id}
            </p>

            <h2>{rocket.rocket_name}</h2>
            <p>
              <strong>{rocket.description}</strong>
            </p>
            <button
              onClick={() => {
                dispatch(fetchRockets());
              }}
              type="button"
            >
              Fetch Data
            </button>
          </li>
        </>
      ))}
    </ul>
  );
};

export default Rockets;
