import React from "react";
import ButtonModal from "./ButtonModal.jsx";
import Modal from "./Modal.jsx";

function App() {
  // Exemplo 1
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: "André", idade: "30" });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Possui faculdade" });
  }

  // Exemplo 2
  const [modal, setModal] = React.useState(false);

  // Exemplo 3
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  function handleClick3() {
    setContar((contar) => {
      setItems((items) => [...items, "Item " + (contar + 1)]);
      return contar + 1;
    });
  }

  return (
    <div>
      <h1>Como Utilizar os hooks</h1>
      <p className={"explicacao"}>
        Hooks são formas de criar e atualizar os valores das variáveis e
        fazê-las renderizar novamente, basicamente você cria uma variável e uma
        função para ela que ao alterar o valor da variável com essa função, toda
        a aplicação é atualizada também
      </p>
      <section>
        <h2>Uso do Hook</h2>
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.faculdade}</p>
        <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
      </section>
      <hr />

      <section>
        <h2>Uso de um Hook para atualizar mais de um componente</h2>
        <p className={"explicacao"} style={{ whiteSpace: "pre-line" }}>
          Aqui usamos uma variável chamada "modal" para definir se o mesmo será
          mostrado ou não. <br />
          Para que o Modal apareça, basta clicar em abrir, quando clicado em
          "Abrir" modifica o valor da variável para "true" e entao a linha
          aparece. <br />
          Na nova linha, aparece um botão de "fechar" que ao clicar possui a
          função de alterar o valor da variável para True, com isso é
          renderizado novamente os componentes fazendo com que seja atualizada a
          interface sem precisar ficar dando "reload" na pagina
        </p>
        <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </section>
      <hr />

      <section>
        <h2>Funções com Callback</h2>
        <p className={"explicacao"}>Quando utilizamos uma função dentro de outra função, chamamos isso como callback. <br />
        Podemos passá-la como parâmetro também se necessario e tambem sera chamada de callback </p>
        <div>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <button onClick={handleClick3}>{(contar)}</button>
        </div>
      </section>
    </div>
  );
}

export default App;
