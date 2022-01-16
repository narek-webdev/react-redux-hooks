import { combineReducers } from "redux";

import PostReducer from "./PostReducer";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  postReducer: PostReducer,
  authReducer: AuthReducer
});

export default rootReducer;