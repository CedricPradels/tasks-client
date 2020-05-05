import React, { useState } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import Cookies from "js-cookie";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Title from "../../atoms/Title";
import Button from "../../atoms/Button";

const GET_EMAIL = gql`
  query EMAIL($token: String) {
    getEmail(token: $token) {
      email
    }
  }
`;

const Header = styled.header``;

export default () => {
  const { data, loading } = useQuery(GET_EMAIL, {
    variables: { token: Cookies.get("token") },
  });

  const history = useHistory();
  return (
    <Header>
      <Title>Tasks</Title>
      {!!Cookies.get("token") && (
        <Button
          onClick={() => {
            Cookies.remove("token");
            history.push("/register");
          }}
        >
          Logout
        </Button>
      )}
    </Header>
  );
};
