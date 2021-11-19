import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS_REQUEST = 'rocketsStore/rockets/fetch_request';
const FETCH_ROCKETS_SUCCESS = 'rocketsStore/rockets/fetch_success';
const FETCH_ROCKETS_FAILURE = 'rocketsStore/rockets/fetch_failure';
const LOAD_LOCAL_ROCKETS = 'load_local';

console.log(URL);
const initialState = {
  loading: false,
  rockets: [
    {
      id: 1,
      rocket_name: 'LauncherOne',
      description: 'a wonderful Rocket',
      flickr_images:
        'https://farm4.staticflickr.com/3914/15118079089_489aa62638_b.jpg',
    },
    {
      id: 2,
      rocket_name: 'SpaceX Starship',
      description: 'created by spaceX company',
      flickr_images:
        'https://farm4.staticflickr.com/3914/15118079089_489aa62638_b.jpg',
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
    default:
      return state;
  }
};

export default reducer;
