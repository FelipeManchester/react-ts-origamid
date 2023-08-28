import React, { useReducer } from "react";
import Input from "./Input";

function reducer() {
  return {
    nome: "Felipe",
    email: "f.p2809@gmail.com",
  };
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, { nome: "", email: "" });

  return (
    <div>
      <Input label="nome"></Input>
      <Input label="email"></Input>
    </div>
  );
};

export default Form;
