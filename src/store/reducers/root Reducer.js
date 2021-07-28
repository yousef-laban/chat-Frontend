import { combineReducers } from "redux";

//Reducers
import user from "./authReducer";
import profiles from "./profileReducer";

const rootReducer = combineReducers({
  user: user,
  profiles: profiles,
});

export default rootReducer;
