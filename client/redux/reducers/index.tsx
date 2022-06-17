import { combineReducers } from "redux";
import toggleMenu from "./toggleMenu.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  toggleMenu,
  userReducer,
});
