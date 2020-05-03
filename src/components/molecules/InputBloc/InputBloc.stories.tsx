import React from "react";

import InputBloc from "./InputBloc";
import { action } from "@storybook/addon-actions";

export default {
  title: "Input Bloc",
  component: InputBloc,
};

export const text = () => (
  <InputBloc
    id="text"
    value="text"
    type="text"
    onChange={action("Text change")}
    title="title"
  />
);
