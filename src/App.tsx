import { PizzaConfigurator } from "./PizzaConfigurator";

function App() {
  return (
    <div className="App">
      <PizzaConfigurator />
      <button
        onClick={() => {
          throw new Error("Some test error");
        }}
      >
        Break the world
      </button>
      ;
    </div>
  );
}

export default App;
