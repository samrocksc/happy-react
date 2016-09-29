import {
  COMMON_CHANGE_GREETING,
} from '../constants';

const initialState = {
  greeting: 'Hello There!',
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case COMMON_CHANGE_GREETING:
      return Object.assign({}, state, {
        greeting: 'How Are You?',
      });
    default:
      return state;
  }
}
