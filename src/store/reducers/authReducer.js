import * as authConstants from "../constants/authConstants";

const initialState = {
  authError: null,
  emailVerified: null,
  user: null,
};

/*
 Also in the reducer we should use the constant naming for the action types
 that way we make sure the we won't have unexpected error
 please take you time and try to use this approach in your reducers
*/

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return { ...state, authError: null };
    case authConstants.LOGIN_SUCCESS:
      console.log("LOGIN_SUCCESS");
      return {
        ...state,
        authError: null,
      };
    case authConstants.LOGIN_FAILURE:
      console.log("LOGIN_FAILED");
      return {
        ...state,
        authError: action.payload.err.message,
      };
    case "EMAIL_NOT_VERIFIED":
      console.log("EMAIL_NOT_VERIFIED");
      return {
        ...state,
        authError: action.payload.err.message,
      };
    case "REGISTER_SUCCESS":
      console.log("REGISTER_SUCCESS");
      return {
        ...state,
        authError: null,
        emailVerified: null,
      };
    case "REGISTER_FAILED":
      console.log("REGISTER_FAILED");
      return {
        ...state,
        authError: action.err.message,
        emailVerified: null,
      };
    case "SET_LOGGED_IN_USER":
      console.log("SET_LOGGED_IN_USER", action.payload.user);
      return {
        ...state,
        user: action.payload.user,
      };
    case "LOGOUT_SUCCESS":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
