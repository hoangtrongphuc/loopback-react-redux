import * as types from '../constants/ActionTypes';

const initialState = null;

export default function authed(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, {
        accessToken: 1234,
        userId: 123
      });

    case types.LOGOUT:
      return null;

    case types.SIGNUP:
      return Object.assign({}, state, {
        accessToken: 1234,
        userId: 123
      });


    default:
      return state;
  }
}
