import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Cookies from "js-cookie";

import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

import Form from "../../components/molecules/Form";
import InputBloc from "../../components/molecules/InputBloc";

const CREATE_USER = gql`
  mutation($email: String, $password: String) {
    register(email: $email, password: $password) {
      email
      token
    }
  }
`;

export default () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      Cookies.set("token", data.register.token);
      history.push("/");
    },
  });

  return (
    <Form
      title="Signup"
      onSubmit={(e) => {
        e.preventDefault();
        createUser({ variables: { email, password } });
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
  );
};
