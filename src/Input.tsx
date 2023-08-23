import { ComponentProps, Dispatch, SetStateAction } from "react";

type InputProps = ComponentProps<"input"> & {
  label: string;
  setState: Dispatch<SetStateAction<string>>;
};

const Input = ({ label, setState, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        onChange={({ currentTarget }) => setState(currentTarget.value)}
        type="text"
        {...props}
      />
    </div>
  );
};

export default Input;
