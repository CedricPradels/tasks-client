import React from "react";
import styled from "styled-components";

const StyledTask = styled.div`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: gray;
  color: white;
  font-weight: bold;
  box-shadow: 0 0 5px black;
  cursor: ${({ done }) => (done ? "not-allowed" : "pointer")};
  text-decoration-line: ${({ done }: { done: boolean }) =>
    done ? "line-through" : "none"};

  &:hover {
    text-decoration-line: line-through;
  }
`;

interface TaskProps {
  children: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  done: boolean;
}

export default ({ children, ...rest }: TaskProps) => (
  <StyledTask {...rest}>{children}</StyledTask>
);
