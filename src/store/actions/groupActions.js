//
import instance from "./instance";

// Action Types
import * as actionType from "./types";

export const fetchGroups = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/group");
      dispatch({
        type: actionType.FETCH_GROUPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const creatGroup = (data) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/group/create", data);

      dispatch({
        type: actionType.CREATE_GROUPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
