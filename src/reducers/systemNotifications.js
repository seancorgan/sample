import { handleActions } from 'redux-actions';
import { notify, closeNotify } from '../actions/systemNotifications';

const initialState = {
  open: false,
  message: '',
  type: 'info'
};

export default handleActions({
  [notify]: (state, action) => {
    return {
      open: true,
      message: action.payload.message,
      type: action.payload.type
    };
  },
  [closeNotify]: (state) => {
    return {
      ...state, open: false
    };
  }
}, initialState);
