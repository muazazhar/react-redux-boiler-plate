import { combineReducers } from "redux";
import auth from "./auth";
import appInfo from "./app_info";

export default combineReducers({
  auth: auth,
  appInfo: appInfo,
});
