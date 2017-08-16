import { handleActions } from 'redux-actions';
import { saveProfile, login, logOut } from '../actions/user';

const initialState = {
  name: null,
  username: null,
  id: null
};

export default handleActions({
  [login]: (state, action) => {
    var { name, username, id, rev } = action.payload;
    return {
      name,
      username,
      id,
      rev
    };
  },
  [saveProfile]: (state, action) => {
    var { name, username } = action.payload;
    return {
      ...state,
      name,
      username
    };
  },
  [logOut]: (state) => {
    return initialState;
  }
}, initialState);
