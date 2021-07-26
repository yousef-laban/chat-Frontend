import * as actionType from "../actions/types";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case actionType.VERIFY:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default authReducer;
