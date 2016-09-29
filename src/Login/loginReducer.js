import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  REMOVE_TOKEN,
  BEGIN_AUTH,
  END_AUTH,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
} from '../constants';

const initialState = {
  authenticated: false,
  isAuthenticating: false,
  error: '',
  token: '',
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return Object.assign({}, state, {
        username: action.payload,
      });
    case UPDATE_PASSWORD:
      return Object.assign({}, state, {
        password: action.payload,
      });
    case BEGIN_AUTH:
      return Object.assign({}, state, {
        isAuthenticating: true,
      });
    case END_AUTH:
      return Object.assign({}, state, {
        isAuthenticating: false,
      });
    case SET_AUTHENTICATED:
      return Object.assign({}, state, {
        authenticated: true,
      });
    case SET_UNAUTHENTICATED:
      return Object.assign({}, state, {
        authenticated: false,
      });
    case REMOVE_TOKEN:
      return Object.assign({}, state, {
        authenticated: false,
        token: '',
      });
    default:
      return state;
  }
}
