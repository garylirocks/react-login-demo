import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
  LOGIN: null,
  LOGIN_FULFILLED: null,
  LOGIN_REJECTED: null,

  LOGOUT: null,
});

export default ActionTypes;
