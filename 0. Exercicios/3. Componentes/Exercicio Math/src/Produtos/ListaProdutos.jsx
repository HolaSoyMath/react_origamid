const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const ListaProdutos = () => {
  return (
    <>
      {produtos.map((produto) => (
        <div style={{border: 'solid black 2px', margin: '10px'}} key={produto.nome}>
          <p>{produto.nome}</p>
          <ul>
            {produto.propriedades.map((propriedade, index) => (
              <li style={{listStyleType: 'square'}} key={index}>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ListaProdutos;
