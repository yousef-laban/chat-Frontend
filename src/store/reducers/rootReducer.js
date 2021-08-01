import { combineReducers } from "redux";
import user from "./authReducer";
import profiles from "./profileReducer";
import groups from "./groupReducer";

const rootReducer = combineReducers({
  user: user,
  profiles: profiles,
  groups: groups,
});

export default rootReducer;
