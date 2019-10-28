import * as ActionTypes from '../constants/actionTypes';
import reducer from './authenticationReducer';

describe('Reducers::Authentication', () => {
  const getInitialState = () => {
    return {
      loggedIn: false
    };
  };

  const getAppState = () => {
    return {
      loggedIn: false
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle LOGIN', () => {
    const action = { type: ActionTypes.LOGIN };
    const expected = { loggedIn: true };

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle LOGOUT', () => {
    const action = { type: ActionTypes.LOGOUT };
    const expected = { loggedIn: false };

    expect(reducer(getAppState(), action)).toEqual(expected);
  });
});
