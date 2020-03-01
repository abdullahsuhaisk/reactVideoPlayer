import { actions } from "./authActions";
import firebase from "../../config/firebase";
import { setToken } from "../../utils/authFunctions";
import { Redirect } from "react-router";
import React from "react";


export const fbSignUp = (email, pass) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(res => {
        setToken(res);
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
        setToken(res);
        dispatch({ type: actions.USER_SIGNIN, payload: res.data });
      })
      .then(() => <Redirect to="/getstarted" />)
      .catch(err => {
        console.log("New Member", err);
        fbSignUp(email, pass);
      })
      .catch(err => dispatch({ type: actions.USER_ERROR, err }));
  };
};
