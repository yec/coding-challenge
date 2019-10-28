import {
  LOGIN,
  LOGOUT,
} from '../constants/actionTypes';

export function createLogIn () {
  return {
    type: LOGIN,
  }
}

export function createLogOut () {
  return {
    type: LOGOUT,
  }
}
