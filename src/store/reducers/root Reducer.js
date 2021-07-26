import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopsReducer from "./shopsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  products: productReducer,
  shops: shopsReducer,
  user: authReducer,
});

export default rootReducer;
