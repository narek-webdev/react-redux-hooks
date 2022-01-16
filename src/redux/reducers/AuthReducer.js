import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, REGISTER_SUCCESS } from '../constants/action-types';

const initalValue = {};

function AuthReducer (state = initalValue, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerSuccess: true
            };
        case REGISTER_FAIL: 
            return {
                ...state,
                error: action.payload
            };
        case LOGIN_SUCCESS: 
            return {
                ...state,
                loginSuccess: true
            }
        case LOGIN_FAIL: 
            return {
                ...state,
                loginError: action.payload
            }
        default: 
            return state
    }
}

export default AuthReducer;