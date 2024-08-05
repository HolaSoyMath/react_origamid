import React from "react";
import Button2 from "./Button2";
import Input2 from "./Input2";

function Form2() {
  return (
    <div>
      <Input2 id="email" label="Email" required />
      <Input2 id="password" label="Pasword" type="password" />
      <Button2 />
    </div>
  );
}

export default Form2;
