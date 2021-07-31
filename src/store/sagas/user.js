import {call, put} from 'redux-saga/effects';
import {AuthApi} from "../../services/auth-service";
import {
    fetchUser as fetchUserAction,
    loginUserError,
    retrieveUserError,
    userError,
    userLoaded,
    userLoggedIn,
    userRetrieved
} from "../actions/user";
import {getUser, storeUser} from "../../storage";
import {UserApi} from "../../services/user-service";

export function* loginUser({payload}) {
    try {
        const data = yield call(AuthApi.login, payload);
        yield put(userLoggedIn(data));
        yield put(fetchUserAction(data));
    } catch (error) {
        console.log([error]);
        yield put(loginUserError(error));
    }
}

export function* fetchUser({payload: {user_id, token}}) {
    try {
        const user = yield call(UserApi.getUser, user_id, token);
        yield put(userLoaded(user));
        yield call(storeUser, {user, token})
    } catch (error) {
        console.log([error]);
        yield put(userError(error));
    }
}

export function* retrieveUser() {
    try {
        const data = yield call(getUser);
        yield put(userRetrieved(JSON.parse(data)));
    } catch (error) {
        console.log([error]);
        yield put(retrieveUserError(error));
    }
}
