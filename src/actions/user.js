import { createAction } from 'redux-actions';

export const saveProfile = createAction('SAVE_PROFILE');
export const login = createAction('LOGIN');
export const logOut = createAction('LOGOUT');
export const deleteAccount = createAction('DELETE_ACCOOUNT');

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

export function deleteAccountAsync(id) {
  return dispatch => {
    setTimeout(() => {
      dispatch(logOut());
      history.push('/signup');
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
