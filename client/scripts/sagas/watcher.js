import { takeLatest } from 'redux-saga';
import { authSaga } from './authSaga';
import * as types from '../constants/ActionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchAuth() {
  yield* takeLatest(types.LOGIN_REQUEST, authSaga);
}