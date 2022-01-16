import { GET_POSTS } from '../constants/action-types';

const getPosts = () => {
    return dispatch => {
        return fetch(`https://tumanyanadmin.weflex.am/api/slider_one`, {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(res => dispatch({ type: GET_POSTS, payload: res }));
    }
}

export { getPosts };