const initalValue = {
    posts: [],
};

function PostReducer (state = initalValue, action) {
    if (action.type === "GET_POSTS") {
        return {
            ...state,
            posts: action.payload
        }
    }

    return state;
}

export default PostReducer;