import { createAction } from 'redux-actions';

export const login = createAction('LOGIN');

export function loginAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(login());
    }, delay);
  };
}
