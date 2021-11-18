import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rocket';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, reduxThunk));

export default store;
