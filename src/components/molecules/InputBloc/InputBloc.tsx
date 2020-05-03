import React from "react";

import styled from "styled-components";

import Label from "../../atoms/Label";
import Input from "../../atoms/Input";

const Container = styled.div``;

interface InputBlocProps {
  title: string;
}

export default ({ title }: InputBlocProps) => (
  <Container>
    <Label>{title}</Label>
    <Input />
  </Container>
);
