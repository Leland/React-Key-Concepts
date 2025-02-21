import "./App.css";
import { useState } from "react";
import { Calculator } from "./components/Calculator";
import { Goal } from "./components/Goal";
import { Header } from "./components/Header";
import { EmailForm } from "./components/EmailForm";

type Operand = "addition" | "subtraction" | "multiplication" | "division";

function App() {
  const [values, setValues] = useState<[number, number]>([0, 0]);
  const [operand, setOperand] = useState<Operand>("addition");
  const [email, setEmail] = useState("");

  const onChangeFirst = (e: any) => {
    setValues((v) => [e.target.value, v[1]]);
  };

  const onChangeSecond = (e: any) => {
    setValues((v) => [v[0], e.target.value]);
  };

  const onSelectOperand = (e: any) => {
    setOperand(e.target.value);
  };

  let result: number;
  switch (operand) {
    case "addition":
      result = Number(values[0]) + Number(values[1]);
      break;
    case "subtraction":
      result = Number(values[0]) - Number(values[1]);
      break;
    case "division":
      result = Number(values[0]) / Number(values[1]);
      break;
    case "multiplication":
      result = Number(values[0]) * Number(values[1]);
      break;
    default:
      result = 0;
      break;
  }

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Header>
        <h1>My Goals For This Book</h1>
      </Header>
      <Goal title="Develop a deeper understanding of React's hooks">
        And new developments
      </Goal>
      <Goal title="Get faster with React">
        Work on coding speed and ergonomics
      </Goal>
      <section>
        <h2>Chapter 4</h2>
        <Calculator
          values={values}
          operand={operand}
          onChangeFirst={onChangeFirst}
          onChangeSecond={onChangeSecond}
          onSelect={onSelectOperand}
        />
        <p>
          <strong>Result:</strong> {result}
        </p>
      </section>
      <section>
        <h2>Chapter 5</h2>
        <EmailForm value={email} onChange={onChangeEmail} />
      </section>
    </>
  );
}

export default App;
