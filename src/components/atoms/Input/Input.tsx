import React from "react";

import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  font-variant: small-caps;
`;

interface InputProps {
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  value: string;
  type: "text" | "password";
  id?: string;
  onKeyPress?:
    | ((event: React.KeyboardEvent<HTMLInputElement>) => void)
    | undefined;
}

export default ({ ...props }: InputProps) => <StyledInput {...props} />;
