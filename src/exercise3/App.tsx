import { useEffect, useState } from "react";

import Input from "./Input";
import Button from "./Button";

function User() {
  return {
    nome: "Felipe",
    profissao: "Desenvolvedor Front End",
  };
}

type User = {
  nome: string;
  profissao: string;
};

type Sales = {
  id: string;
  nome: string;
  preco: number;
  status: string;
};

function App() {
  const [data, setData] = useState<null | User>(null);

  const [total, setTotal] = useState(0);

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [sales, setSales] = useState<null | Sales[]>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(User());
    }, 1000);
  }, []);

  useEffect(() => {
    if (start !== "" && end !== "") {
      fetch(`https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`)
        .then((res) => res.json())
        .then((json) => setSales(json as Sales[]))
        .catch((error) => console.log(error));
    }
  }, [start, end]);

  const totalSales = sales?.reduce((total, sale) => total + sale.preco, 0);

  return (
    <div>
      <div>
        <p>Total: {total}</p>
        <Button increment={setTotal} />
      </div>
      {data !== null && (
        <p>
          {data.nome}: {data.profissao}
        </p>
      )}
      <div>
        <Input label="Início" type="date" setState={setStart} value={start} />
        <Input label="Final" type="date" setState={setEnd} value={end} />
      </div>

      <p>Total de vendas no período: {totalSales} </p>
      <ul>
        {sales &&
          sales.map((values) => (
            <li key={values.id}>
              {values.nome}: {values.status} R$: {values.preco}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
