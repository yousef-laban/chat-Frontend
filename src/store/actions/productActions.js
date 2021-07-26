//
import axios from "axios";
// Action Types
import * as actionType from "./types";
// export const DELETE_PRODUCT = "DELETE_PRODUCT";
// export const CREATE_PRODUCT = "CREATE_PRODUCT";
// export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
// export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      dispatch({
        type: actionType.DELETE_PRODUCT,
        payload: { productId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = (newProduct) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newProduct) {
      formData.append(key, newProduct[key]);
    }

    const res = await axios.post(
      `http://localhost:8000/shops/${newProduct.shopId}/products`,
      formData
    );

    dispatch({
      type: actionType.CREATE_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (updatedProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);

      const res = await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        formData
      );
      dispatch({
        type: actionType.UPDATE_PRODUCT,
        payload: { updatedProduct: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      dispatch({
        type: actionType.FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
