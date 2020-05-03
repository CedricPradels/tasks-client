import React from "react";
import { action } from "@storybook/addon-actions";

import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const text = () => {
  return (
    <Input type="text" value="some text" onChange={action("text change")} />
  );
};

export const password = () => {
  return (
    <Input type="password" value="some text" onChange={action("text change")} />
  );
};
