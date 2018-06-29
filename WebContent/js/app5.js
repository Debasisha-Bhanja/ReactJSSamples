function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Debasisha" />
      <Welcome name="Tom" />
      <Welcome name="Robin" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);