import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Couner:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Value</button>
    </div>
  );
};

export default Counter;
