import TutorialJsx, { Alert, Img, List, Mathematical } from "./TutorialJsx";
import Header, { Profile, Setting, Operations } from "./Header";
import StateExample from "./StateExample";
import Counter from "./Counter";
import Toggle from "./Toggle";
import MultipleCondition from "./MultipleCondition";
import Props from "./Props";
import PropsArray from "./PropsArray";
import { useState } from "react";
import PropsClick from "./PropsClick";
import DefaultProps from "./DefaultProps";
import Wrapper from "./Wrapper";
import InputOnChange from "./InputOnChange";
import ControlledComponent from "./ControlledComponent";
import CheckboxControl from "./CheckboxControl";
import RadiobtnControl from "./RadiobtnControl";

function App() {
  let useObj1 = {
    name: "Vaishali Chauhan",
    age: "33",
    email: "vaishalichauhan56@gmail.com",
  };
  let useObj2 = {
    name: "Nishant Chauhan",
    age: "35",
    email: "nishant05@gmail.com",
  };
  let collageName = ["IIT", "NIT", "AIT", "DU"];
  const [student, setStudent] = useState();
  return (
    <div>
      <Header />
      <Profile />
      <Setting />
      <Operations />
      <TutorialJsx />
      <Img />
      <List />
      <Alert />
      <Mathematical />
      <h1>Hello Vaishali Vite | React</h1>
      <StateExample />
      <Counter />
      <Toggle />
      <MultipleCondition />
      {/* <Props name="Vaishali" age="33" /> */}
      <Props user={useObj1} />
      <DefaultProps /> {/* Default value will be print */}
      <Props user={useObj2} />
      <PropsArray name={collageName[0]} />
      <PropsArray name={collageName[1]} />
      <PropsArray name={collageName[2]} />
      {student && <PropsClick names={student} />}
      <button
        onClick={() => {
          setStudent("Nishant");
        }}
      >
        Update STudent Name
      </button>
      <Wrapper>
        <h1>Wrapper Place here </h1>
      </Wrapper>
      <InputOnChange />
      <ControlledComponent />
      <CheckboxControl />
      <RadiobtnControl/>
    </div>
  );
}

export default App;
