import React from "react";

import styled from "styled-components";

import Button from "../../atoms/Button";
import Title from "../../atoms/Title";

const Form = styled.form``;

interface FormProps {
  children: React.ReactNode;
  title: string;
}

export default ({ children, title }: FormProps) => (
  <Form>
    <Title>{title}</Title>
    {children}
    <Button>Submit</Button>
  </Form>
);
