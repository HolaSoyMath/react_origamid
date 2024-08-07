import React from "react";
import Produto from "./Produto";

function App() {
  // Exemplo 1
  const [contar, setContar] = React.useState(0);
  React.useEffect(() => {
    document.title = "Título " + contar;
  }, [contar]);

  // Exemplo 2
  const [dados, setDados] = React.useState(null);
  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  // Exemplo 3
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <h1>useEffect</h1>
      <h2>Exemplo 1</h2>
      <p>
        O useEffect tem 2 parametros, o primeiro, para quando o componente for
        renderizado uma vez, o segundo que deve ser um array, que indica qual
        variável deve ser atualizada.
        <br /> <br />
        <code>
          {`
            React.useEffect(() => {
              document.title = "Título " + contar;
            }, [contar]);
          `}
        </code>
        <br /> <br />
        Podemos ver no código acima que ao carregar o elemento a primeira vez, o
        título sera colocado com a variavel contar, e toda vez que essa variavel
        mudar o titulo será atualizado. Caso nao tenha a variavel dentro do
        array, o Titulo carregará apenas a primeira vez enão atualizará mais o
        seu valor.
        <br />
        Um uso pode ser em uma lista de produtos, a lista dos produtos eu busco
        apenas uma vez, e quando o estado de outras variáveis forem modificados
        eu nao quero ficar atualizando minha tela.
        <br /> <br />
        <code>
          {`
            React.useEffect(() => {
              fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
                .then((response) => response.json())
                .then((json) => setDados(json));
            }, []);
          `}
        </code>
        <br /> <br />
      </p>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
      <hr />
      <h2>Exemplo 2</h2>
      <p>
        Ao utilizar o useEffect em uma requisição de API por exemplo, para que
        nao fique em looping infinito, temos que colocar na segunda condição um
        array vazio.
      </p>
      <div>
        {dados && (
          <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco * contar}</p>
          </div>
        )}
      </div>
      <hr />
      <h2>Exemplo 3</h2>
      <div>
        {ativo && <Produto />}
        <button onClick={() => setAtivo(!ativo)} >Ativar</button>
      </div>
    </div>
  );
}

export default App;
