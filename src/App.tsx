import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";

import Header from "./components/organisms/Header";

import Cookies from "js-cookie";

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
          {/* <Header /> */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/">
              <Tasks />
            </PrivateRoute>
            )}
          </Switch>
        </Router>
      </ApolloProvider>
    </>
  );
}

interface privateRouteProps {
  children: React.ReactNode;
  path: string;
}

const PrivateRoute = ({ children, ...rest }: privateRouteProps) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!Cookies.get("token") ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default App;
