import { createAction } from 'redux-actions';
import { login } from './login';

export const saveProfile = createAction('SAVE_PROFILE');

export function saveProfileAsync({name, username}) {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveProfile({name, username}));
    });
  };
}

export function createProfileAsync({name, username, password, history}) {
  return dispatch => {
    setTimeout(() => {
      debugger;
      dispatch(login({name, username}));
      history.push('/profile');
    });
  };
}
