import React from "react";
import InputTexto from "./InputTexto";

function App() {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [dados, setDados] = React.useState(null);

  function handleClick(event) {
    event.preventDefault();

    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => {
      setDados(response);
    });

    console.log("dados");
    console.log(dados);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.id]: event.target.value });
  }

  return (
    <form onSubmit={handleClick}>
      <InputTexto
        identificador="nome"
        label="Nome"
        varValor={form.nome}
        funcao={handleChange}
      />
      <InputTexto
        identificador="email"
        label="E-mail"
        varValor={form.email}
        funcao={handleChange}
        type="email"
      />
      <InputTexto
        identificador="senha"
        label="Senha"
        varValor={form.password}
        funcao={handleChange}
        type="password"
      />
      <InputTexto
        identificador="cep"
        label="Cep"
        varValor={form.cep}
        funcao={handleChange}
      />
      <InputTexto
        identificador="rua"
        label="Rua"
        varValor={form.rua}
        funcao={handleChange}
      />
      <InputTexto
        identificador="numero"
        label="Numero"
        varValor={form.numero}
        funcao={handleChange}
      />
      <InputTexto
        identificador="cidade"
        label="Cidade"
        varValor={form.cidade}
        funcao={handleChange}
      />
      <InputTexto
        identificador="estado"
        label="Estado"
        varValor={form.estado}
        funcao={handleChange}
      />
      {dados && dados.ok && <p>Formulário enviado!</p>}
      {dados && !dados.ok && <p>Email ja cadastrado!</p>}
      <button>Enviar</button>
    </form>
  );
}

export default App;
