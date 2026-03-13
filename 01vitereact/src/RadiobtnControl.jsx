import { useState } from "react";
function RadiobtnControl() {
  const [gender, setGender] = useState("female");
  const [city, setCity] = useState("gandhinagar");

  return (
    <div>
      <hr />
      <h1>Radio and dropdown Control Component</h1>
      <h3>Select Gender</h3>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="male"
        checked={gender == "male"}
        value={"Male"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="female"
        checked={gender == "female"}
        value={"Female"}
      />
      <label htmlFor="female">Female</label>

      <p>Selected Gender:{gender}</p>
      <br />
      <br />
      <h3>Select City</h3>
      <select
        defaultValue={"gandhinagar"}
        onChange={(event) => setCity(event.target.value)}
      >
        <option value="ahmedabad">Ahmedabad</option>
        <option value="gandhinagar">Gandhinagar</option>
        <option value="pune">Pune</option>
      </select>
      <h4>Selected City:{city}</h4>
    </div>
  );
}

export default RadiobtnControl;
