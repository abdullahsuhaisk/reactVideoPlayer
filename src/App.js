import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import PlayerContainer from "./features/Player/PlayerContainer";
import CustomerRoute from "./components/routes/CustomerRoute";
import VisitorsRoute from "./components/routes/VisitorsRoute";
import LandingScreen from "./features/LandingPage/LandingScreen";
import Login from "./features/LoginPage/Login";
import GetstartedContainer from "./features/GetStarted/GetstartedContainer";

const App = () => {
  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
      <Router>
        <Switch>
          <VisitorsRoute
            path="/landing"
            component={LandingScreen}
            redirectTo={false}
            exact
          />
          <VisitorsRoute path="/login" component={Login} exact redirectTo />
          <VisitorsRoute path="/video" component={PlayerContainer} exact />
          <CustomerRoute path="/getstarted" component={GetstartedContainer} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
