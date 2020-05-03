import React from "react";

import Form from "./Form";

export default {
  title: "Form",
  component: Form,
};

export const withInputs = () => <Form title="Title">ChildrenInput</Form>;
