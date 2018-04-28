import { FETCH_USER, CREATE_LOGIN } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case CREATE_LOGIN: 
      return action.payload || false;
    default:
      return state;
  }
}
