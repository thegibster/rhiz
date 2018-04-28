import axios from "axios";
import { FETCH_USER, CREATE_LOGIN } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/auth/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const createLogin = (loginInfo) => async dispatch => {
  console.log("LoginInfo", loginInfo);
  const res = await axios.post("/auth/create", loginInfo);
  console.log("res", res.data);
  dispatch({ type: CREATE_LOGIN, payload: res.data });
}