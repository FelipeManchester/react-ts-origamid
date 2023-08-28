import { useState } from "react";
import useFetch from "../exercise6/useFetch";

type Product = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

function App() {
  const [id, setId] = useState("P001");

  const products = useFetch<Product[]>("https://data.origamid.dev/produtos/");
  const productDetail = useFetch<Product>(
    `https://data.origamid.dev/produtos/${id}`,
  );

  return (
    <section className="flex">
      <div>
        {products.data &&
          products.data.map((product) => (
            <button
              onClick={() => setId(product.id)}
              key={product.id}
              style={{ fontSize: "1rem" }}
            >
              {product.nome}
            </button>
          ))}
      </div>
      <div>
        {productDetail.loading && <div>Carregando...</div>}
        {productDetail.data && (
          <ul>
            <li>ID: {productDetail.data.id}</li>
            <li>Nome: {productDetail.data.nome}</li>
            <li>Descrição: {productDetail.data.descricao}</li>
            <li>Quantidade: {productDetail.data.quantidade}</li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default App;
