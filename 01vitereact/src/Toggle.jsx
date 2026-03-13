import { useState } from "react";
function Toggle() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <h1>Toggle Place here </h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <h2>Toggle Visiable1</h2> : <h2>Hide</h2>}
    </div>
  );
}

export default Toggle;
