import { useState } from "react";
import Button from "./Button";

function App() {
  const [total, setTotal] = useState(0);

  const increment = () => {
    setTotal((total) => total + 1);
  };

  const decrement = () => {
    setTotal((total) => total - 1);
  };

  return (
    <div>
      <p>Total: {total}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Button />
    </div>
  );
}

export default App;
