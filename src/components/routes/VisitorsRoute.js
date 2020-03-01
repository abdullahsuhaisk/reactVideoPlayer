import React from "react";
import { Route } from "react-router-dom";
import { isLogin } from "../../utils/authFunctions";
import { Redirect } from "react-router-dom";

function VisitorsRoute({ component: Component, redirectTo, ...rest }) {
  if (redirectTo && isLogin()) {
    console.log(redirectTo);
    console.log(isLogin());
    console.log(Component);
    return <Redirect to="/getstarted" />;
  } else {
    console.log(Component);
    console.log("VisitorsRoute");
    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route {...rest} render={props => <Component {...props} />} />
    );
  }
}
export default VisitorsRoute;
