import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, loadLocal } from '../Redux/rockets/rocket';
import '../css/rocket.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocal());
  });
  return (
    <ul
      className="ul"
      onLoad={() => {
        dispatch(fetchRockets());
      }}
    >
      {rockets.rockets.map((rocket) => (
        <>
          <img src={rocket.flickr_images} alt="" width="200" height="200" />
          <li key={rocket.id}>
            <h2>{rocket.rocket_name}</h2>
            <p>
              <strong>{rocket.description}</strong>
            </p>
            <button
              type="button"
              className="button"
            >
              Reserve Rocket
            </button>
          </li>
        </>
      ))}
    </ul>
  );
};

export default Rockets;
