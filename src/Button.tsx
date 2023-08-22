import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  size?: string;
};

const Button = ({ size, children, ...props }: ButtonProps) => {
  return (
    <button style={{ fontSize: size }} {...props}>
      {children}
    </button>
  );
};

export default Button;
