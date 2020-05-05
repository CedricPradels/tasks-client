import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import Cookies from "js-cookie";

import Title from "../../atoms/Title";
import Button from "../../atoms/Button";

const Header = styled.header``;

export default () => {
  const token = Cookies.get("token");

  const history = useHistory();
  return (
    <Header>
      <Title>Tasks</Title>
      {!!token && (
        <Button
          onClick={() => {
            Cookies.remove("token");
            history.push("/login");
          }}
        >
          Logout
        </Button>
      )}
    </Header>
  );
};
