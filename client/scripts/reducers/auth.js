import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  VALIDATION
} from '../constants/ActionTypes';

let initState = {
  userId: null,
  accessToken: null,
  error: null
}

export default(state = initState, action) => {
  switch (action.type) {

    case LOGIN_FAILED:
      console.log(action);
      return {userId: null, accessToken: null, error: action.error};

    case LOGIN_SUCCESS:
      return action.data;

    case REGISTER_FAILED:
      return action.data;

    case REGISTER_SUCCESS:
      return action.data;

    case VALIDATION:
      console.log(action);
      return {userId: null, accessToken: null, error: action.error};
    default:
      return state;
  }
}