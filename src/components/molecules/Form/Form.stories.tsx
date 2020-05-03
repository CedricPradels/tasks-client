import React from "react";

import Form from "./Form";
import { action } from "@storybook/addon-actions";

export default {
  title: "Form",
  component: Form,
};

export const withInputs = () => (
  <Form title="Title" onSubmit={action("Form submited")}>
    ChildrenInput
  </Form>
);
