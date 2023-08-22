import React from "react";

type Button = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const Button2 = ({ total, setTotal }: Button) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
  );
};

export default Button2;
