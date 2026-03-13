import localImage from "./images/Vaishali-Chauhan.jpg";
function TutorialJsx() {
  return (
    <div>
      <h1>Vaishali Chauhan</h1>
    </div>
  );
}
export function Img() {
  return (
    <div>
      <img src={localImage} alt="Vaishali-Chauhan" width="300" />
    </div>
  );
}
export function List() {
  return (
    <ul>
      <li>Unstoppable</li>
      <li>Creative</li>
      <li>Manifest</li>
      <li>Dreamer</li>
    </ul>
  );
}
export function Alert() {
  return (
    <div>
      <button onClick={() => alert("Vaishali Chauhan")}>Click Me</button>
    </div>
  );
}
function Opr(a, b, para) {
  if (para == "+") {
    return a + b;
  } else if (para == "-") {
    return a - b;
  } else {
    return a * b;
  }
}
const userObj = {
  Name: "Vaishali  CHauahn",
  Age: "32",
};
const fruit = (name) => {
  alert(name);
};
export function Mathematical() {
  return (
    <>
      {Opr(34, 67, "+")}
      {userObj.Name}
      <button onClick={() => fruit("Apple")}>Click Me</button>
    </>
  );
}
export default TutorialJsx;
