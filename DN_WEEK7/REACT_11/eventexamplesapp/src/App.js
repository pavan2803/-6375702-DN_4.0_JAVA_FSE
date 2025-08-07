import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const sayHello = () => {
    console.log("Hello! Static Message: Have a nice day!");
  };

  const increment = () => {
    setCounter(counter + 1);
    sayHello();
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handlePress = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>🖱️ Event Examples App</h1>

      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>

      <br /><br />
      <button onClick={handlePress}>Click Me</button>

      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
