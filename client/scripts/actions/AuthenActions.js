import * as types from '../constants/ActionTypes';


function login(message) {
  return {
    type: types.LOGIN,
    data: {
      username: action.username,
      password: action.password,
      captcha: action.captcha
    }
  };
}

function logout(message) {
  return {
    type: types.LOGOUT,
    data: {
      userId: action.userId
    }
  };
}

function signup(message) {
  return {
    type: types.SIGNUP,
    data: {
      username: action.username,
      password: action.password,
      rePassword: action.rePassword,
      email: action.email
    }
  };
}

