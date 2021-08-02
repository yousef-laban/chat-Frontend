import * as actionType from "../actions/types";

const initialState = {
  user: null,
  users: [],
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case actionType.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    // REVIEW: If this is not updating the state, no need to call the reducer.
    case actionType.VERIFY:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default authReducer;
