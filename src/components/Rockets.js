import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinLeaveRocket } from '../Redux/rockets/rocket';
import '../css/rocket.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  return (
    <div>
      { rockets.error === '' ? (
        <ul className="ul">
          {rockets.rockets.map((rocket) => (
            <>
              <img src={rocket.flickr_images} alt="" width="200" height="200" />
              <li key={rocket.id}>
                <h2>{rocket.rocket_name}</h2>
                <p>
                  <span
                    className={
              rocket.reserved ? 'display-inline-block' : 'display-none'
            }
                  >
                    {' '}
                    reserved
                    {' '}

                  </span>
                  {rocket.description}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(joinLeaveRocket(rocket.id));
                  }}
                  className="button"
                >
                  {rocket.reserved ? 'Leave Rocket' : 'Join Rocket'}
                </button>
              </li>
            </>
          ))}
        </ul>
      ) : (<h1>{rockets.error}</h1>)}
    </div>
  );
};

export default Rockets;
