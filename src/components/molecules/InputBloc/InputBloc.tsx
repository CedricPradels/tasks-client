import React from "react";

import styled from "styled-components";

import Label from "../../atoms/Label";
import Input from "../../atoms/Input";

const Container = styled.div``;

interface InputBlocProps {
  title: string;
  id: string;
  type: "password" | "text";
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  value: string;
}

export default ({ title, ...rest }: InputBlocProps) => (
  <Container>
    <Label htmlFor={rest.id}>{title}</Label>
    <Input {...rest} />
  </Container>
);
