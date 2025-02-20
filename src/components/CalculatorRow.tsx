import { useState } from "react";

function CalculatorRow() {
  const [firstVal, setFirstVal] = useState(0);
  const [secondVal, setSecondVal] = useState(0);

  const result = Number(firstVal) + Number(secondVal);

  const firstHandler = (e: any) => {
    setFirstVal(e.target.value);
  };
  const secondHandler = (e: any) => {
    setSecondVal(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault}>
      <input type="number" value={firstVal} onChange={firstHandler} />
      +
      <input type="number" value={secondVal} onChange={secondHandler} /> ={" "}
      {result}
    </form>
  );
}

export { CalculatorRow };
