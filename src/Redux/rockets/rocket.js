import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS_REQUEST = 'rocketsStore/rockets/fetch_request';
const FETCH_ROCKETS_SUCCESS = 'rocketsStore/rockets/fetch_success';
const FETCH_ROCKETS_FAILURE = 'rocketsStore/rockets/fetch_failure';
const LOAD_LOCAL_ROCKETS = 'load_local';

console.log(URL);
let initialState = {
  loading: false,
  rockets: [
    {
      rocket_id: 1,
      rocket_name: 'LauncherOne',
      description: 'a wonderful Rocket',
    },
    {
      rocket_id: 2,
      rocket_name: 'SpaceX Starship',
      description: 'created by spaceX elon',
    },
  ],
  error: '',
};

export const loadLocal = () => ({
  type: LOAD_LOCAL_ROCKETS,
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
  axios.get(URL, { headers: {} }).then((response) => {
    //  const data = Object.entries(response.data).map(([]))
    const data = response.data;
    console.log(data);
    return data;
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
    default:
      return state;
  }
};

export default reducer;
