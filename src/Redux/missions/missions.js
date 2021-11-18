import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';
const FETCH_MISSIONS_REQUEST = 'missionsStore/missions/fetch_request';
const FETCH_MISSIONS_SUCCESS = 'missionsStore/missions/fetch_success';
const FETCH_MISSIONS_FAILURE = 'missionsStore/missions/fetch_failure';
const LOAD_LOCAL_MISSIONS = 'load_local';

console.log(URL);
const initialState = {
  loading: false,
  missions: [
    {
      mission_id: 1,
      mission_name: 'Moon Trip',
      description: 'A trip to the moon',
    },
    {
      mission_id: 2,
      mission_name: 'Mars Trip',
      description: 'A trip to Mars',
    },
  ],
  error: '',
};

export const loadLocal = () => ({
  type: LOAD_LOCAL_MISSIONS
});
export const fetchMissionsRequest = () => ({
  type: FETCH_MISSIONS_REQUEST,
});

export const fetchMissionsSuccess = (payload) => ({
  type: FETCH_MISSIONS_SUCCESS,
  payload
});

export const fetchMissionsFailure = () => ({
  type: FETCH_MISSIONS_FAILURE,
});

export const fetchMissions = () => (dispatch) => {
  dispatch(fetchMissionsRequest());
  axios.get(URL, { headers: {} })
  .then((response) => {
  //  const data = Object.entries(response.data).map(([]))
  const data = response.data;
  console.log(data);

  })
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS_SUCCESS:
      return {
        missions: action.payload,
        loading: false,
        error:'',
      };
    case LOAD_LOCAL_MISSIONS:
      return state;
    default:
      return state;
    }

}

export default reducer;