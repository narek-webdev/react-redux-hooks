const getPosts = () => {
    return dispatch => {
        return fetch(`https://tumanyanadmin.weflex.am/api/slider_one`, {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8", 
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY"
            }
        })
        .then(res => res.json())
        .then(res => dispatch({ type: "GET_POSTS", payload: res }));
    }
}

export { getPosts };