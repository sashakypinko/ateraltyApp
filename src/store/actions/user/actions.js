import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER, RETRIEVE_USER_FAILURE, RETRIEVE_USER_REQUEST, RETRIEVE_USER_SUCCESS
} from './action-types';

export const loginUser = (data) => {
    return {
        type: LOGIN_USER_REQUEST,
        payload: data
    };
};

export const userLoggedIn = (user) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user
    };
};

export const loginUserError = (error) => {
    return {
        type: LOGIN_USER_FAILURE,
        payload: error
    };
};

export const retrieveUser = () => {
    return {
        type: RETRIEVE_USER_REQUEST
    };
};

export const userRetrieved = (data) => {
    return {
        type: RETRIEVE_USER_SUCCESS,
        payload: data
    };
};

export const retrieveUserError = (error) => {
    return {
        type: RETRIEVE_USER_FAILURE,
        payload: error
    };
};

export const fetchUser = ({token, user_id}) => {
    return {
        type: FETCH_USER_REQUEST,
        payload: {token, user_id}
    };
};

export const userLoaded = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    };
};

export const userError = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}
