// import React from "react";
import React from "react";
import Produtos from "./Produtos";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function App() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleCLick(event) {
    // Iniciar o estado de "carregando"
    setCarregando(true);

    // Construir a URL
    const produto = event.target.innerText;
    const url = "https://ranekapi.origamid.dev/json/api/produto/" + produto;

    // Aguardar as respostas da API
    const response = await fetch(url);
    const json = await response.json();

    // Setar os valores dos dados com o valor do JSON que seria um Array
    setDados(json);

    // Finalizar o estado de carregando
    setCarregando(false);
  }

  return (
    <div>
      <p>
        <button style={{ margin: ".5rem" }} onClick={handleCLick}>
          notebook
        </button>
        <button style={{ margin: ".5rem" }} onClick={handleCLick}>
          smartphone
        </button>
        <button style={{ margin: ".5rem" }} onClick={handleCLick}>
          tablet
        </button>
      </p>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produtos data={dados} />}
    </div>
  );
}

export default App;
