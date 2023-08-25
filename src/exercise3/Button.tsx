type ButtonProps = {
  increment: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ increment }: ButtonProps) => {
  return (
    <button onClick={() => increment((number) => number + 1)}>Button</button>
  );
};

export default Button;
