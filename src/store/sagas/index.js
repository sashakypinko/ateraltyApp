import {all, takeEvery} from 'redux-saga/effects';
import {fetchUser, loginUser, retrieveUser} from './user';
import {FETCH_USER_REQUEST, LOGIN_USER_REQUEST, RETRIEVE_USER_REQUEST} from '../actions/user';

function* rootSaga() {
    yield all([
        takeEvery(LOGIN_USER_REQUEST, loginUser),
        takeEvery(FETCH_USER_REQUEST, fetchUser),
        takeEvery(RETRIEVE_USER_REQUEST, retrieveUser)
    ]);
}

export default rootSaga;
