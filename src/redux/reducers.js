import userInfo from 'reducers/userInfo';
import { combineReducers } from 'redux';
import counter from './reducers/counter';

export default combineReducers({
  counter,
  userInfo,
});
