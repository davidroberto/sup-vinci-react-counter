import { useState } from "react";

const Counter = () => {
  const [counterClick, setCounterClick] = useState(0);

  const incrementCounter = () => {
    setCounterClick(counterClick + 1);
  };

  console.log("rendu du composant");

  return (
    <div>
      <p>Bravo, tu as cliqué {counterClick} fois</p>
      <button onClick={incrementCounter}>Clique vite</button>
    </div>
  );
};

export default Counter;
