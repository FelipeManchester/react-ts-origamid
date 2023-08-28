import React from "react";
import { useUser } from "./UserContext";

const ChangeUserButton = () => {
  const { changeUser } = useUser();

  return <button onClick={changeUser}>Mudar usuário</button>;
};

export default ChangeUserButton;
