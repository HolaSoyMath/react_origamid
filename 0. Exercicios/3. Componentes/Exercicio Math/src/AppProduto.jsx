import Menu from "./Menu/Menu";
import ListaProdutos from "./Produtos/ListaProdutos";

function AppProduto() {
  return (
    <div>
      <Menu titulo="Produtos" />
      <ListaProdutos />
    </div>
  );
}

export default AppProduto;
