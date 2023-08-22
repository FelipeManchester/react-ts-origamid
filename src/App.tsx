import { useState, ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import App2 from "./exercise1/App2";
import Checkbox from "./Checkbox";

function App() {
  const [total, setTotal] = useState(0);

  const increment = () => {
    setTotal((total) => total + 1);
  };

  const [date, setDate] = useState("");

  const showDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.currentTarget.value);
  };

  return (
    <div>
      <p>Total: {total}</p>

      <Button onClick={increment}>Adicionar</Button>

      <Input label="Email" id="email" />
      <Input label="Nome" id="nome" />
      <Input label="Inicio" id="inicio" type="date" onChange={showDate} />
      <Input label="Horário" id="horario" type="time" />
      <p>Ínicio: {date}</p>
      <hr />
      <hr />
      <p>Exercício 2</p>
      <App2 />
      <hr />
      <hr />
      <p>Eventos</p>
      <Checkbox label="Termos e Condições" />
    </div>
  );
}

export default App;
