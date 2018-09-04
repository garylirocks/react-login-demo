import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import C from '../constants';

export const user = (state = {authed: false}, action) => {
  switch (action.type) {
    case C.LOGIN_PENDING:
      return {
        ...state,
        authed: false,
        isLoading: true,
      };
    case C.LOGIN_FULFILLED:
      return {
        ...action.payload,
        authed: true,
      };
    case C.LOGOUT:
      return {
        authed: false,
      };
    default:
      return state;
  }
};

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
