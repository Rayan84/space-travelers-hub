import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';
const FETCH_MISSIONS_REQUEST = 'missionsStore/missions/fetch_request';
const FETCH_MISSIONS_SUCCESS = 'missionsStore/missions/fetch_success';
const FETCH_MISSIONS_FAILURE = 'missionsStore/missions/fetch_failure';

const JOIN_LEAVE_MISSION = 'missionStore/missions/join_mission';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

export const joinLeaveMission = (payload) => ({
  type: JOIN_LEAVE_MISSION,
  payload,
});

export const fetchMissionsRequest = () => ({
  type: FETCH_MISSIONS_REQUEST,
});

export const fetchMissionsSuccess = (payload) => ({
  type: FETCH_MISSIONS_SUCCESS,
  payload,
});

export const fetchMissionsFailure = () => ({
  type: FETCH_MISSIONS_FAILURE,
});

export const fetchMissions = () => (dispatch) => {
  // console.log('fetching missions');
  dispatch(fetchMissionsRequest());
  axios.get(URL, { headers: {} })
    .then((response) => {
      const data = Object.values(response.data);
      const arr = [];
      for (let i = 0; i < data.length; i += 1) {
        const obj = {};
        obj.mission_id = data[i].mission_id;
        obj.mission_name = data[i].mission_name;
        obj.description = data[i].description;
        obj.joined = false;
        arr.push(obj);
      }
      dispatch(fetchMissionsSuccess(arr));
    })
    .catch((error) => {
      dispatch(fetchMissionsFailure(error.message));
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS_SUCCESS:
      return {
        missions: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_MISSIONS_FAILURE:
      return {
        error: action.payload,
        loading: false,
        missions: [],
      };
    case FETCH_MISSIONS_REQUEST:
      return {
        loading: true,
        error: '',
        missions: [],
      };

    case JOIN_LEAVE_MISSION: {
      console.log('Case: JOIN_MISSION');
      // console.log(action.payload);
      // console.log(state);
      // console.log(state.missions);
      const newState = {
        loading: state.loading,
        error: state.error,
      };
      newState.missions = state.missions.map((mission) => {
        console.log(state);
        if (mission.mission_id !== action.payload) {
          // console.log(mission);
          return mission;
        }

        const changedMission = mission;
        if (changedMission.joined === true) {
          changedMission.joined = false;
        } else {
          changedMission.joined = true;
        }
        // console.log(changedMission);
        return changedMission;
        // console.log('===============final return============');

        // console.log({ ...state, changedMission });
        // return { ...state.loading, ...state.error, ..., newState };
      });

      return newState;
    }
    default:
      return state;
  }
};

fetchMissions();

export default reducer;
