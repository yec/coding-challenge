import * as ActionTypes from '../constants/actionTypes';
import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = { authentication : {loggedIn : false }};

describe('Store', () => {

  it('should display results when necessary data is provided', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.LOGIN },
      { type: ActionTypes.LOGIN },
      { type: ActionTypes.LOGIN },
      { type: ActionTypes.LOGOUT },
      { type: ActionTypes.LOGOUT },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();

    const expected = {
      loggedIn: false
    };

    expect(actual.authentication).toEqual(expected);
  });

  it('should handle many actions', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.LOGIN },
      { type: ActionTypes.LOGIN },
      { type: ActionTypes.LOGIN },
      { type: ActionTypes.LOGOUT },
      { type: ActionTypes.LOGOUT },
    ];

    actions.forEach(action => store.dispatch(action));

    const moreActions = [
      { type: ActionTypes.LOGIN },
      { type: ActionTypes.LOGIN },
      { type: ActionTypes.LOGIN },
      { type: ActionTypes.LOGOUT },
      { type: ActionTypes.LOGOUT },
    ];

    moreActions.forEach(action => store.dispatch(action));

    const actual = store.getState();

    // with jest snapshots the above assertion can be replaced with this one line
    // jest will store the value in a file within ./__snapshots__
    // snapshots can/should be committed and reviewed
    // jest will also update snapshot or delete unused ones using the command `npm run test -- -u`
    expect(actual.authentication).toMatchSnapshot();
  });
});
