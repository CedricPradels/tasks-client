import React from "react";

import styled from "styled-components";

import Button from "../../atoms/Button";
import Title from "../../atoms/Title";

const Form = styled.form``;

interface FormProps {
  children: React.ReactNode;
  title: string;
  onSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
}

export default ({ children, title, onSubmit }: FormProps) => (
  <Form onSubmit={onSubmit}>
    <Title>{title}</Title>
    {children}
    <Button>Submit</Button>
  </Form>
);
