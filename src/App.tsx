import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
