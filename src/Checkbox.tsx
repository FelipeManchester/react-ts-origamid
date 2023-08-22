import React from "react";

type CheckboxProps = {
  label: string;
};

const Checkbox = ({ label }: CheckboxProps) => {
  const [value, setValue] = React.useState(false);

  const borderColor = value ? "2px solid #8d2" : "2px solid #f70";

  return (
    <label
      style={{
        padding: "1rem",
        border: borderColor,
      }}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={({ currentTarget }) => setValue(currentTarget.checked)}
      />
      {label}
    </label>
  );
};

export default Checkbox;
