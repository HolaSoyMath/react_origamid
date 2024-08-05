import Header from "./Header.jsx"
import Home from "./Home.jsx"
import Produtos from "./Produtos.jsx"

function App() {
  const {pathname} = window.location;
  let Pagina;
  if (pathname === '/produtos'){
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  )
}

export default App
