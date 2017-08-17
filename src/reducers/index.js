import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './user';
import notifications from './systemNotifications';

const rootReducer = combineReducers({
  user,
  routing,
  notifications
});

export default rootReducer;
