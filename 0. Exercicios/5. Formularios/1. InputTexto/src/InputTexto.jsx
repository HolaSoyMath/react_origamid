
// eslint-disable-next-line react/prop-types
const InputTexto = ({identificador, label, varValor, funcao, ...props}) => {
  return (
    <div>
      <label htmlFor={identificador}>{label}</label>
      <input
        type="text"
        id={identificador}
        name={identificador}
        value={varValor}
        onChange={funcao}
        {...props}
      />
    </div>
  );
}

export default InputTexto