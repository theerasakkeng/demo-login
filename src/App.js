import Login from './Components/Login/Login.js'
import Mapview from './Components/Map/Mapview.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AutProvider} from './Components/AutContext/AutContext.js'

import './App.css';

function App() {
  return (
    <AutProvider>
    <Router>
      <div className="App">
        <Switch>
        <Route path="/map">
            <Mapview />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    </AutProvider>
  );
}

export default App;
