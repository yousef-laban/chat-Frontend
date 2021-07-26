import * as actionType from "../actions/types";

const initialState = {
  // initiate all state and its initial value
  shops: [],
  loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_SHOP:
      return {
        ...state,
        shops: [...state.shops, action.payload],
      };

    case actionType.FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default productReducer;
