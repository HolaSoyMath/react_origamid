const App = () => {
  function handleClick(event) {
    console.log(event);
  }

  return <button onClick={handleClick}>Clique</button>;
};

ReactDOM.render(<App />, document.getElementById("root"));
