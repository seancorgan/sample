import { createAction } from 'redux-actions';

export const saveProfile = createAction('SAVE_PROFILE');

export function saveProfileAsync({name, username}) {
  return dispatch => {
    setTimeout(() => {
      debugger;
      dispatch(saveProfile({name, username}));
    });
  };
}
