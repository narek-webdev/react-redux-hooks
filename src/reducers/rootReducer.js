import { combineReducers } from "redux";

import PostReducer from "./PostReducer";

const rootReducer = combineReducers({
  postReducer: PostReducer,
});

export default rootReducer;