import { createAction } from 'redux-actions';
import { notify } from './systemNotifications';
import PouchDB from 'pouchdb';
PouchDB.plugin(require('pouchdb-authentication'));

export const saveProfile = createAction('SAVE_PROFILE');
export const login = createAction('LOGIN');
export const logOut = createAction('LOGOUT');
export const deleteAccount = createAction('DELETE_ACCOOUNT');

// var db = new PouchDB('https://506381d5-ea8e-4437-adf1-fdc3d52afc43-bluemix.cloudant.com', {skip_setup: true});
var db = new PouchDB('http://localhost:5984/salesforce', {skip_setup: true});

export function saveProfileAsync({name, username}) {
  return (dispatch, getState) => {
      const {user} = getState();

      db.putUser(user.username, {
          metadata : {
          formalName : name,
        }
      }, function (err, response) {
          dispatch(saveProfile({name, username: user.username}));
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
      db.logout();
      history.push('/signup');
    });
  };
}

export function logOutAsync() {
  return dispatch => {
    dispatch(logOut());
    db.logout();
  };
}

export function loginAsync(username, password, history) {
  return dispatch => {
    dispatch(notify({
      message: 'Logging in',
      type: 'info'
    }));
    db.login(username, password).then((resp)=> {
      db.getUser(username)
      .then((resp) => {
        dispatch(login({
          id: resp._id,
          rev: resp._rev,
          name: resp.formalName,
          username: username
        }));
        history.push('/profile');
      })
      .catch((err) => {
        if (err.name === 'not_found') {
          dispatch(notify({
            message: 'The user account was not found',
            type: 'error'
          }));
        } else {
          dispatch(notify({
            message: 'Our service is down :(',
            type: 'error'
          }));
        }
      });
    })
    .catch((err) => {
      if (err.name === 'unauthorized') {
        dispatch(notify({
          message: 'The user account was not found',
          type: 'error'
        }));
      } else {
        dispatch(notify({
          message: 'Our service is down :(',
          type: 'error'
        }));
      }
    });
  };
}
