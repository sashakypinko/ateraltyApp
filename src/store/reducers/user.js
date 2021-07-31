import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    RETRIEVE_USER_FAILURE,
    RETRIEVE_USER_REQUEST,
    RETRIEVE_USER_SUCCESS
} from "../actions/user";
import {UserState} from "../init-state";

const user = (state = UserState, action) => {

    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                user_id: false,
                token: false,
                loading: true,
                error: null
            };

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user_id: action.payload.user_id,
                token: action.payload.token,
                loading: false,
                error: null
            };

        case LOGIN_USER_FAILURE:
            return {
                ...state,
                user_id: false,
                token: false,
                loading: false,
                error: action.payload
            };

        case RETRIEVE_USER_REQUEST:
            return {
                ...state,
                loading: false,
                error: null
            };

        case RETRIEVE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user || {},
                token: action.payload.token || false,
                loading: false,
                error: null
            };

        case RETRIEVE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case FETCH_USER_REQUEST:
            return {
                ...state,
                user: {},
                loading: true,
                error: null
            };

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            };

        case FETCH_USER_FAILURE:
            return {
                ...state,
                user: {},
                loading: false,
                error: action.payload
            };

        case LOGOUT_USER:
            return {
                ...state,
                user: {},
                user_id: false,
                token: false
            };

        default:
            return state;
    }
};

export default user;
