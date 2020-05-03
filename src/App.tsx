import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Tasks />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
