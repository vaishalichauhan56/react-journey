import { useState } from "react";
function StateExample() {
  const [fruit, setFruit] = useState("Apple");
  const handleFruit = () => {
    setFruit("Banan");
  };
  return (
    <div>
      <h1>StateExample Place here </h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change Fruit</button>
    </div>
  );
}

export default StateExample;
