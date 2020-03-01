import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../utils/authFunctions";

function CustomerRoute({ component: Component, ...rest }) {
  console.log(isLogin());
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
export default CustomerRoute;
