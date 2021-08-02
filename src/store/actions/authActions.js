import decode from "jwt-decode";
import instance from "./instance";

// Action Types
import * as actionType from "./types";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/users");
      dispatch({
        type: actionType.FETCH_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const signup = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", userData);

    dispatch(setUser(res.data.token));

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signin = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);

    dispatch(setUser(res.data.token));
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logout = (history) => async (dispatch) => {
  try {
    dispatch(setUser());
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const verify = (user) => async (dispatch) => {
  try {
    const res = await instance.post("/verify", user);

    dispatch(verifyToken(res.data.token));
  } catch (error) {
    console.log(error);
  }
};
// REVIEW: What's the difference between this function and the above
export const verifying = (user, history) => async (dispatch) => {
  try {
    // REVIEW: remove clg if you're done with it
    console.log(user);
    const res = await instance.post("/verifying", user);

    dispatch({
      type: actionType.SET_USER,
      payload: user,
    });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");

  if (token) {
    const currentTime = Date.now();
    const user = decode(token);

    if (currentTime > user.exp) return setUser();
    else return setUser(token);
  }

  return setUser();
};

const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    return {
      type: actionType.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    return {
      type: actionType.SET_USER,
      payload: null,
    };
  }
};

const verifyToken = (token) => {
  localStorage.setItem("Token", token);
  return {
    type: actionType.VERIFY,
    //REVIEW: Remove the payload
    payload: decode(token),
  };
};
