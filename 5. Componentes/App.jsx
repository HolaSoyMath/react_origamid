import Footer from "./Footer";
import Header from "./Header";
import Form from "./src/form/Form";
import Form2 from "./src/Form2/Form2";

const Teste = () => {
  const active = true;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

const Titulo = (props) => {
  return <h1>{props.texto}</h1>
}

const Titulo2 = (props) => {
  return <h1 style={{color: props.cor}} >{props.texto}</h1>;
};

const TituloDesestruturado = ({cor, texto}) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

const TituloChildren = ({cor, texto, children}) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

function App() {
  return (
    <>
      <Teste />
      <Titulo texto="Meu título 1" />
      <Titulo2 texto="Meu título 2 com cor" cor="blue" />
      <TituloDesestruturado texto="Meu título 2 com cor" cor="red" />
      <TituloChildren texto="Meu título 2 com cor" cor="green">Aqui é o Children
        <p>Parágrafo</p>
      </TituloChildren>
      <Header />
      <Form />
      <h1>Formulário utilizando o "...props", chamado de "Rest"</h1>
      <Form2 />
      <Footer />
    </>
  );
}

export default App;
