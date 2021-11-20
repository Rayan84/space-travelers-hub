import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS_REQUEST = 'rocketsStore/rockets/fetch_request';
const FETCH_ROCKETS_SUCCESS = 'rocketsStore/rockets/fetch_success';
const FETCH_ROCKETS_FAILURE = 'rocketsStore/rockets/fetch_failure';
const LOAD_LOCAL_ROCKETS = 'load_local';
const JOIN_LEAVE_ROCKET = 'rocketstore/rockets/join_rocket';

console.log(URL);
const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

export const loadLocal = () => ({
  type: LOAD_LOCAL_ROCKETS,
});

export const joinLeaveRocket = (payload) => ({
  type: JOIN_LEAVE_ROCKET,
  payload,
});

export const fetchRocketsRequest = () => ({
  type: FETCH_ROCKETS_REQUEST,
});

export const fetchRocketsSuccess = (payload) => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload,
});

export const fetchRocketsFailure = () => ({
  type: FETCH_ROCKETS_FAILURE,
});

export const fetchRockets = () => (dispatch) => {
  dispatch(fetchRocketsRequest());
  axios
    .get(URL, { headers: {} })
    .then((response) => {
      const data = Object.values(response.data);
      const arr = [];
      for (let i = 0; i < data.length; i += 1) {
        const obj = {};
        obj.id = data[i].id;
        obj.rocket_name = data[i].rocket_name;
        obj.description = data[i].description;
        obj.flickr_images = data[i].flickr_images;
        arr.push(obj);
      }
      dispatch(fetchRocketsSuccess(arr));
    })
    .catch((error) => {
      dispatch(fetchRocketsFailure(error.message));
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_SUCCESS:
      return {
        rockets: action.payload,
        loading: false,
        error: '',
      };
    case LOAD_LOCAL_ROCKETS:
      return state;
    case JOIN_LEAVE_ROCKET: {
      console.log('Case: JOIN_ROCKET');
      // console.log(action.payload);
      // console.log(state);
      // console.log(state.rockets);
      const newState = {
        loading: state.loading,
        error: state.error,
      };
      newState.rockets = state.rockets.map((rocket) => {
        console.log(state);
        if (rocket.id !== action.payload) {
          // console.log(rocket);
          return rocket;
        }

        const changedRocket = rocket;
        if (changedRocket.reserved === true) {
          changedRocket.reserved = false;
        } else {
          changedRocket.reserved = true;
        }
        // console.log(changedRocket);
        return changedRocket;
        // console.log('===============final return============');

        // console.log({ ...state, changedrocket });
        // return { ...state.loading, ...state.error, ..., newState };
      });

      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
