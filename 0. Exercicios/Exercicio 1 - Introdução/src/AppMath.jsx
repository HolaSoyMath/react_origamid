import { useState } from "react";

// Mostre os dados da aplicação, como apresentado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

// Novo componente que cria um parágrafo indicando o Gasto EXtra
const GastoExtra = () => {
  return <p>Voce está gastando muito.</p>;
};

const App = () => {
  // Informar qual o usuário será utilizado
  const dados = luana;

  // A partir do Array das compras, separar apenas os valores de cada compra e substituir o "R$ "
  const listaPrecos = dados.compras.map((compra) =>
    Number(compra.preco.replace("R$ ", ""))
  );

  // Somar os valores no acumulador "somatorio" onde "preco" é o valor do atual item do array e o mesmo inicia em 0
  const totalPreco = listaPrecos.reduce(
    (somatorio, preco) => somatorio + preco,
    0
  );

  return (
    <div>
      {/* Mostrar dados do cliente */}
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        {/* Verificar se está ativa apra a palavra ficar Verde ou Vermelha */}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {/* Escrever se o usuário está ativo ou Inativo */}
          {dados.ativa ? "Ativo" : "Inativo"}
        </span>
      </p>
      {/* Mostrar valor gasto*/}
      <p>
        Total gasto: R$ <span>{totalPreco}</span>
      </p>
      {/* Se o usuário teve um custo maior de 10000 indicar que o mesmo está gastando muito */}
      {totalPreco > 10000 ? GastoExtra() : null}
    </div>
  );
};

export default App;
