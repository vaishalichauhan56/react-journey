import { useState } from "react";
function InputOnChange() {
  const [val, setVal] = useState("");
  return (
    <div>
      <h1>Get Input Field Value</h1>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Place the value"
      />
      <button onClick={() => setVal("")}>Clear</button>
      {val}
    </div>
  );
}

export default InputOnChange;
