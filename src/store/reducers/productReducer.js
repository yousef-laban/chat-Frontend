import * as actionType from "../actions/types";

const initialState = {
  // initiate all state and its initial value
  products: [],
  loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DELETE_PRODUCT:
      const productToKeep = state.products.filter(
        (product) => product.id !== action.payload.productId
      );

      return {
        ...state,
        products: productToKeep,
      };

    case actionType.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case actionType.UPDATE_PRODUCT:
      const { updatedProduct } = action.payload;
      console.log(updatedProduct);
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };

    case actionType.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default productReducer;
