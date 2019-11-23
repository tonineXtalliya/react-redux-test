import { combineReducers } from "redux";
import { unsplashReducer } from "./loginReducer";

const rootReducer = combineReducers({
  unsplash: unsplashReducer
});

export default rootReducer;
