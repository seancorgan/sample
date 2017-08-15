import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import user from './user';

const rootReducer = combineReducers({
  counter,
  user,
  routing
});

export default rootReducer;
