import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import Cookies from "js-cookie";

import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";

import Form from "../../components/molecules/Form";
import InputBloc from "../../components/molecules/InputBloc";

const LOGIN_USER = gql`
  query($email: String, $password: String) {
    login(email: $email, password: $password) {
      email
      token
    }
  }
`;

export default () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { data }] = useLazyQuery(LOGIN_USER, {
    onCompleted: async (data) => {
      if (data.login !== null) {
        console.log(data);
        Cookies.set("token", data.login.token);
        history.push("/");
      } else {
        setEmail("");
        setPassword("");
      }
    },
  });

  return (
    <>
      <Form
        title="Login"
        onSubmit={async (e) => {
          e.preventDefault();
          await loginUser({ variables: { email, password } });
        }}
      >
        <InputBloc
          title="Email :"
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBloc
          title="Password :"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form>
      <Link to="/register">Go to register page.</Link>
    </>
  );
};
