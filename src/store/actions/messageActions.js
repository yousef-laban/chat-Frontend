//
import instance from "./instance";

// Action Types
import * as actionType from "./types";

export const fetchAllMessages = () => {
  return async (dispatch) => {
    try {
      // Backend path should be `/messages` and not `/message`
      const res = await instance.get("/message");
      dispatch({
        // REVIEW: there is a typo in the type
        // REVIEW: it should be plural
        type: actionType.FETCH_MESSGAE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

// REVIEW: create not creat
export const creatMessage = (data) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/message/create", data);

      dispatch({
        type: actionType.CREATE_MESSAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
