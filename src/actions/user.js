import { createAction } from 'redux-actions';
import PouchDB from 'pouchdb';
PouchDB.plugin(require('pouchdb-authentication'));

export const saveProfile = createAction('SAVE_PROFILE');
export const login = createAction('LOGIN');
export const logOut = createAction('LOGOUT');
export const deleteAccount = createAction('DELETE_ACCOOUNT');

var db = new PouchDB('http://localhost:5984/salesforce', {skip_setup: true});

export function saveProfileAsync({name, username}) {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveProfile({name, username}));
    });
  };
}

export function createProfileAsync({name, username, password, history}) {
  return dispatch => {
      db.signup(username, password, {
      metadata : {
        formalName: name
      }
    })
    .then((response) => {
      dispatch(login({
        id: response.id,
        name: name,
        username: username,
        rev: response.rev
      }));
      history.push('/profile');
    })
    .catch((err) => {
      if (err.name === 'conflict') {
        // "batman" already exists, choose another username
      } else if (err.name === 'forbidden') {
        // invalid username
      } else {
        // HTTP error, cosmic rays, etc.
      }
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
