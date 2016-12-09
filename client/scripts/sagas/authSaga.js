import {put, call} from 'redux-saga/effects';
import {login, register} from '../core/userApi';
import * as types from '../constants/ActionTypes';

// Responsible for searching media library, making calls to the API and
// instructing the redux-saga middle ware on the next line of action, for
// success or failure operation.
export function * authSaga(payload) {
    try {
        const loginRes = yield call(login, payload.data);
        if (!loginRes.error) {
            yield put({type: types.LOGIN_SUCCESS, data: loginRes});
        } else {
            yield put({type: types.LOGIN_FAILED, error: loginRes.error.message});
        }

    } catch (error) {
        yield put({type: types.LOGIN_FAILED, error: error});
    }
}