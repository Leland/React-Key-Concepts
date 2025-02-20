import { CalculatorRow } from "./CalculatorRow";

const Calculator = () => {
  return (
    <>
      <CalculatorRow operand="addition" />
      <CalculatorRow operand="subtraction" />
      <CalculatorRow operand="multiplication" />
      <CalculatorRow operand="division" />
    </>
  );
};

export { Calculator };
