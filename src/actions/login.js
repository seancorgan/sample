import { createAction } from 'redux-actions';

export const login = createAction('LOGIN');

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
