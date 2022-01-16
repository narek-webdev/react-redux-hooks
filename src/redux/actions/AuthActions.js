import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from '../constants/action-types';

import { signup, signin } from '../../firebase/firebase.functions';

const registerAction = data => {
    return dispatch => {
        return signup(data.email, data.password)
            .then(userCredential => {
                console.log(userCredential)
                dispatch({type: REGISTER_SUCCESS, payload: userCredential})
            })
            .catch(err => dispatch({type: REGISTER_FAIL, payload: err}))
    }
}

const loginAction = data => {
    return dispatch => {
        return signin(data.email, data.password)
            .then(userCredential => dispatch({type: LOGIN_SUCCESS, payload: userCredential}))
            .catch(err => dispatch({type: LOGIN_FAIL, payload: err}))
    }
}

export { registerAction, loginAction };