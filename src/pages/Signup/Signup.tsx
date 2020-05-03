import React from "react";

import Form from "../../components/molecules/Form";
import InputBloc from "../../components/molecules/InputBloc";

export default () => {
  return (
    <Form title="Signup">
      <InputBloc title="email" />
      <InputBloc title="password" />
    </Form>
  );
};
