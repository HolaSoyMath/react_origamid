const Menu = ({titulo}) => {
  return (
    <div>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="produtos.html">Produtos</a></li>
      </ul>
      <h1 style={{color: 'green'}} >{titulo}</h1>
    </div>
  );
};

export default Menu;
