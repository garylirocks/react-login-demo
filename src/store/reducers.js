import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import produce from 'immer';
import C from '../constants';

export const user = produce((draft, action) => {
  switch (action.type) {
    case C.LOGIN_PENDING:
      draft.isLoading = true;
      break;

    case C.LOGIN_FULFILLED:
      draft.authed = true;
      draft.isLoading = false;
      break;

    case C.LOGOUT:
      draft.authed = false;
      break;

    default:
      break;
  }
}, {
  authed: false,
});

export const items = (state = {}, action) => {
  switch (action.type) {
    case C.UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  form: reduxFormReducer,
  items,
  user,
});
