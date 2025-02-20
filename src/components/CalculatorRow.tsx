import { useState } from "react";

type Operands = "addition" | "subtraction" | "multiplication" | "division";

interface CalculatorRowProps {
  operand: Operands;
}

const getSign = (operand: Operands) => {
  switch (operand) {
    case "addition":
      return "+";
    case "subtraction":
      return "-";
    case "division":
      return "/";
    case "multiplication":
      return "*";
  }
};

function CalculatorRow({ operand }: CalculatorRowProps) {
  const [firstVal, setFirstVal] = useState(0);
  const [secondVal, setSecondVal] = useState(0);

  // const result = Number(firstVal) + Number(secondVal);

  const firstHandler = (e: any) => {
    setFirstVal(e.target.value);
  };

  const secondHandler = (e: any) => {
    setSecondVal(e.target.value);
  };

  let result: number;
  switch (operand) {
    case "addition":
      result = Number(firstVal) + Number(secondVal);
      break;
    case "subtraction":
      result = Number(firstVal) - Number(secondVal);
      break;
    case "division":
      result = Number(firstVal) / Number(secondVal);
      break;
    case "multiplication":
      result = Number(firstVal) * Number(secondVal);
      break;
    default:
      result = 0;
      break;
  }

  const sign = getSign(operand);

  return (
    <form onSubmit={(e) => e.preventDefault}>
      <input type="number" value={firstVal} onChange={firstHandler} />
      {sign}
      <input type="number" value={secondVal} onChange={secondHandler} /> ={" "}
      {result}
    </form>
  );
}

export { CalculatorRow };
