import { State } from "./State";

export const Reducer = (state: State, action: any) => {
  switch (action.type) {
    case "LOGIN_STATE":
      return {
        ...state,
        id: action.id,
        username: action.username,
        accessToken: action.accessToken,
        authenticated: action.authenticated,
      };
    case "LOGOUT_STATE":
      return {
        ...state,
        id: action.id,
        username: action.username,
        accessToken: action.accessToken,
        authenticated: action.authenticated,
      };
    case "EXPIRED_STATE":
      return {
        ...state,
        id: action.id,
        username: action.username,
        accessToken: action.accessToken,
        authenticated: action.authenticated,
      };
    default:
      return state;
  }
};
