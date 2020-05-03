import React from "react";

import styled from "styled-components";

const StyledInput = styled.input``;

interface InputProps {
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  value: string;
  type: "text" | "password";
  id?: string;
}

export default ({ ...props }: InputProps) => <StyledInput {...props} />;
