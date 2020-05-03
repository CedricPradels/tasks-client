import React from "react";
import styled from "styled-components";

const StyledTask = styled.div``;

interface TaskProps {
  children: React.ReactNode;
}

export default ({ children }: TaskProps) => <StyledTask>{children}</StyledTask>;
