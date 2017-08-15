import { handleActions } from 'redux-actions';
import { login } from '../actions/login';
import { saveProfile } from '../actions/saveProfile';

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
  },
  [saveProfile]: (state, action) => {
    var { name, username } = action.payload;
    return {
      ...state,
      name,
      username
    };
  }
}, initialState);
