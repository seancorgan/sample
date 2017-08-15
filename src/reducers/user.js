import { handleActions } from 'redux-actions';
import { login } from '../actions/login';

const initialState = {
  name: null,
  username: null,
  id: null
};

export default handleActions({
  [login]: (state) => {
    return {
      name: 'Sean Corgan',
      username: 'seancorgan',
      id: 1
    };
  }
}, initialState);
