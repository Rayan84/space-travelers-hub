const URL = 'https://api.spacexdata.com/v3/missions';
const FETCH_MISSIONS_REQUEST = 'missionsStore/missions/fetch_request';
const FETCH_MISSIONS_SUCCESS = 'missionsStore/missions/fetch_success';
const FETCH_MISSIONS_FAILURE = 'missionsStore/missions/fetch_failure';

console.log(URL);
const initialState = {
  loading: false,
  missions: [],
  error: '',
};

export const fetchMissionsRequest = () => ({
  type: FETCH_MISSIONS_REQUEST,
});

export const fetchMissionsSuccess = () => ({
  type: FETCH_MISSIONS_SUCCESS,
});

export const fetchMissionsFailure = () => ({
  type: FETCH_MISSIONS_FAILURE,
});

export const fetchMissions = () => {
  
}


