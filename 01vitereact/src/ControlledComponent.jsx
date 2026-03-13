import { useState } from "react";
function ControlledComponent() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <hr />
      <h1>Controlled Component</h1>
      <form action="" method="get">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Place the value"
        />
        <br />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Place the value"
        />
        <br />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Place the value"
        />
        <br />

        <button
          onClick={() => {
            setName("");
            setPass("");
            setEmail("");
          }}
        >
          Submit
        </button>
        <button
          onClick={() => {
            setName("");
            setPass("");
            setEmail("");
          }}
        >
          Clear
        </button>
        <br />
        <p> {name}</p>
        <p> {pass}</p>
        <p> {email}</p>
      </form>
    </div>
  );
}

export default ControlledComponent;
