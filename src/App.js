import Login from './Components/Login/Login.js'
import Map from './Components/Map/Map.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/map">
            <Map />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
