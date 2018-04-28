import axios from "axios";
import { FETCH_USER, LOGIN_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/auth/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginUser = (loginInfo) => async dispatch => {
  console.log("LoginInfo", loginInfo);
  const res = await axios.get("/auth/login", loginInfo);
  console.log("res", res);
  dispatch({ type: LOGIN_USER, payload: res });
}