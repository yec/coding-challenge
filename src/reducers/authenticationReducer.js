import { LOGIN, LOGOUT } from '../constants/actionTypes';

export default function authenticatonReducer(state = { loggedIn: false }, action) {

  switch (action.type) {
    case LOGIN:
      return { loggedIn: true };

    case LOGOUT:
      return { loggedIn: false };

    default:
      return state;
  }
}
