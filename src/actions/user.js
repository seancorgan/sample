import { createAction } from 'redux-actions';

export const saveProfile = createAction('SAVE_PROFILE');
export const login = createAction('LOGIN');

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
      dispatch(login({name, username}));
      history.push('/profile');
    });
  };
}

export function loginAsync(username, password, history) {
  return dispatch => {
    setTimeout(() => {
      dispatch(login({
        id: 1,
        name: 'Sean Corgan',
        username: 'seancorgan'
      }));
      history.push('/profile');
    });
  };
}
