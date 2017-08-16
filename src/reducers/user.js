import { handleActions } from 'redux-actions';
import { saveProfile, login } from '../actions/user';

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
