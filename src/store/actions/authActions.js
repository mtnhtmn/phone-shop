import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  firestore,
  signOut,
} from "../../services/firebaseService";
import { getPendingOrder } from "./ordersActions";
import * as authConstants from "../constants/authConstants";
/* 
  i Recommend using action function to send dispatches
  its a common convention
  and also using constant naming for actions types its very important and best practice
  
  stack overflow discussion about why its important
  the top response mentions Dan Abramov he is the creator of redux
  https://stackoverflow.com/questions/34965856/what-is-the-point-of-the-constants-in-redux

  also a bit about redux patterns
  https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns


  please try to replace all hardcoded types and actions to functions and constants
  as in the example 
*/
const loginRequestAction = () => ({
  type: authConstants.LOGIN_REQUEST,
});

const loginSuccessAction = () => ({
  type: authConstants.LOGIN_SUCCESS,
});

const loginFailureAction = (err) => ({
  type: authConstants.LOGIN_FAILURE,
  payload: err,
});

const emailNotVerifiedAction = (message) => ({
  type: authConstants.LOGIN_FAILURE,
  payload: { err: { message } },
});

export const doLogin = (user) => {
  return (dispatch) => {
    dispatch(loginRequestAction());
    signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        if (data.user.emailVerified) {
          dispatch(loginSuccessAction());
        } else {
          dispatch(emailNotVerifiedAction("email not verified"));
        }
      })
      .catch((err) => {
        dispatch(loginFailureAction(err));
      });
  };
};

export const doRegister = (user) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userInitials: user.firstName[0] + user.lastName[0],
          });
      })
      .then(() => {
        return sendEmailVerification();
      })
      .then(() => {
        dispatch({ type: "REGISTER_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "REGISTER_FAILED", err });
      });
  };
};

export const doLogout = () => {
  return (dispatch) => {
    signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGOUT_FAILED", err });
      });
  };
};

/* 
  i think function name should be updateLoggedInUserData and not getLoggedInUser data
  you are not returning from the function anything so it can be confusing 

  also you dont need to return new Promise firebase already returns as a promise
  you can see this by hovering the function name
*/
export const getLoggedInUserData = (userUid) => {
  return (dispatch) => {
      return new Promise((resolve, reject)=>{
          firestore.collection('users').doc(userUid).get().then((doc)=>{
              const user = doc.data()
              dispatch({type: 'SET_LOGGED_IN_USER', payload: {user}})
              dispatch(getPendingOrder(doc.id))
              resolve()
          })
      })
  }
}
