import { useState } from "react";
function CheckboxControl() {
  const [skills, setSkills] = useState([]);
  const handleSkill = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };

  return (
    <div>
      <hr />
      <h1>Checkbox Control Component</h1>
      <input
        type="checkbox"
        onChange={handleSkill}
        name=""
        id="php"
        value="php"
      />
      <label htmlFor="php">PHP</label>
      <input
        type="checkbox"
        onChange={handleSkill}
        name=""
        id="java"
        value="java"
      />
      <label htmlFor="java">java</label>
      <input
        type="checkbox"
        onChange={handleSkill}
        name=""
        id="react"
        value="react"
      />
      <label htmlFor="react">React</label>
      <p>{skills.toString()}</p>
    </div>
  );
}

export default CheckboxControl;
