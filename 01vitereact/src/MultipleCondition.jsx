import { useState } from "react";
function MultipleCondition() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>MultipleCondition Place here </h1>
      <button onClick={() => setcount(count + 1)}>MultipleCondition</button>
      {count == 1 ? (
        <h2>MultipleCondition Visiable1</h2>
      ) : count == 2 ? (
        <h2>MultipleCondition Visiable2</h2>
      ) : count == 3 ? (
        <h2>MultipleCondition Visiable3</h2>
      ) : (
        <h2>MultipleCondition Visiable</h2>
      )}
    </div>
  );
}

export default MultipleCondition;
