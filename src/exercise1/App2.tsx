import React from "react";
import Button2 from "./Button2";

function App2() {
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      <p>Total: {total}</p>
      <Button2 total={total} setTotal={setTotal} />
    </div>
  );
}

export default App2;
