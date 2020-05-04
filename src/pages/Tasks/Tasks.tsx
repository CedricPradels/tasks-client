import React, { useState } from "react";
import styled from "styled-components";

import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";

import Cookies from "js-cookie";

import Title from "../../components/atoms/Title";
import Input from "../../components/atoms/Input";
import Task from "../../components/atoms/Task";

const StyledTasks = styled.div``;

const token = Cookies.get("token");

const CREATE_TASK = gql`
  mutation Create($name: String, $token: String) {
    createTask(name: $name, token: $token) {
      name
    }
  }
`;

const UPDATE_TASK = gql`
  mutation Udapte($id: ID, $token: String) {
    updateTask(id: $id, token: $token) {
      name
    }
  }
`;

const GET_TASKS = gql`
  query Test($token: String) {
    todoTasks(token: $token) {
      name
      id
    }
    doneTasks(token: $token) {
      name
      id
    }
  }
`;

export default () => {
  const [task, setTask] = useState("");
  const { data, loading } = useQuery(GET_TASKS, { variables: { token } });
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS, variables: { token } }],
  });
  const [updateTask] = useMutation(UPDATE_TASK, {
    refetchQueries: [{ query: GET_TASKS, variables: { token } }],
  });

  return (
    <StyledTasks>
      <Title>Tasks</Title>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            createTask({ variables: { name: task, token } });
            setTask("");
          }
        }}
      />
      {!data ? (
        <Title>...loading</Title>
      ) : (
        <>
          <Title>Todo</Title>
          {data.todoTasks.map(({ name, id }: any) => (
            <Task
              done={false}
              key={id}
              onClick={() => {
                updateTask({
                  variables: {
                    id,
                    token,
                  },
                });
              }}
            >
              {name}
            </Task>
          ))}
          <Title>Done</Title>
          {data.doneTasks.map(({ name, id }: any) => (
            <Task done={true} key={id}>
              {name}
            </Task>
          ))}
        </>
      )}
    </StyledTasks>
  );
};
