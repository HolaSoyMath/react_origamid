import Button from "./Button.jsx";
import Input from "./Input.jsx";

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="mail">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default Form;
