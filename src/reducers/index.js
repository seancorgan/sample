import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import user from './user';
import notifications from './systemNotifications';

const rootReducer = combineReducers({
  counter,
  user,
  routing,
  notifications
});

export default rootReducer;
