import axios from "axios";
import { FETCH_USER, CREATE_LOGIN, LOGIN_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/auth/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const createLogin = (loginInfo) => async dispatch => {
  const res = await axios.post("/auth/create", loginInfo);
  dispatch({ type: CREATE_LOGIN, payload: res.data });
}

export const loginUser = (loginInfo) => async dispatch => {
  const res = await axios.post("/auth/login", loginInfo);
  console.log("loginUser", loginInfo);
  console.log("res", res);
  dispatch({ type: LOGIN_USER, payload: res.data });
}