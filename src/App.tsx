import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import PlayerContainer from './features/Player/PlayerContainer';
import Authentication from './features/Authentication';


const App: React.FC = () => {
  return (
    <div className="App" style={{ width: '100%', height: '100vh' }}>
      <Router>
        <Route path="/video">
          <PlayerContainer />
        </Route>
        <Route path="/auth">
          <Authentication />
        </Route>
      </Router>
    </div>
  );
}

export default App;
