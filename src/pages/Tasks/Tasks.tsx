import React, { useState } from "react";
import styled from "styled-components";

import Title from "../../components/atoms/Title";
import Input from "../../components/atoms/Input";

const StyledTasks = styled.div``;

export default () => {
  const [task, setTask] = useState("");

  return (
    <StyledTasks>
      <Title>Tasks</Title>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </StyledTasks>
  );
};
