import { actions } from "./authActions";
import firebase from "../../config/firebase";

export const fbSignUp = (email, pass) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(res => {
        console.log(res);
        dispatch({ type: actions.USER_SIGNIN });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: actions.USER_ERROR, err });
      });
  };
};

export const fbLogin = (email, pass) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(res => {
        console.log(res);
        dispatch({ type: actions.USER_SIGNIN, payload: res.data });
      })
      .catch(() => {
        fbSignUp(email, pass);
      })
      .catch(err => dispatch({ type: actions.USER_ERROR, err }));
  };
};
