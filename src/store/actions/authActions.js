import axios from "axios";
import decode from "jwt-decode";

//Action Types
import * as actionType from "./types";

export const signup = (userData, history) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8000/signup`, userData); //Replace with ""
    dispatch(setUser(res.data.token));
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signin = (userData, history) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8000/signin`, userData); //Replace with ""
    dispatch(setUser(res.data.token));
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(setUser());
  } catch (error) {
    console.log(error);
  }
};

export const verify = (user) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/verify", user);
    dispatch(verifyToken(res.data.token));
  } catch (error) {
    console.log(error);
  }
};

export const verifying = (user, history) => async (dispatch) => {
  try {
    console.log(user);
    const res = await axios.post("http://localhost:8000/verifying", user);
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
    payload: decode(token),
  };
};
