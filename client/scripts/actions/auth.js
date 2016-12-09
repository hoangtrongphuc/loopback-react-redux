import * as types from '../constants/ActionTypes';

export function loginSuccess(data) {
  return {type: types.LOGIN_SUCCESS, data: data};
}

export function loginFailed(error) {
  return {type: types.LOGIN_FAILED, error};
}


export function validation(error) {
  return {type: types.VALIDATION, error};
}

export function registerSuccess(data) {
  return {type: types.REGISTER_SUCCESS, data: data};
}

export function registerFailed(error) {
  return {type: types.REGISTER_FAILED, error: error};
}
export function loginRequest(data) {
  return {type: types.LOGIN_REQUEST, data};
}
export function registerRequest(data) {
  return {type: types.REGISTER_REQUEST, data: data};
}
