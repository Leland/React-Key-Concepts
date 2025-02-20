type Operand = "addition" | "subtraction" | "multiplication" | "division";

interface CalculatorProps {
  values: [number, number];
  operand: Operand;
  onChangeFirst: (e: any) => void;
  onChangeSecond: (e: any) => void;
  onSelect: (e: any) => void;
}

const operandsToSigns: Record<Operand, string> = {
  addition: "+",
  subtraction: "-",
  division: "/",
  multiplication: "*",
};

function Calculator({
  values,
  operand,
  onChangeFirst,
  onChangeSecond,
  onSelect,
}: CalculatorProps) {
  const selectedSign = operandsToSigns[operand];

  return (
    <form onSubmit={(e) => e.preventDefault}>
      <input type="number" value={values[0]} onChange={onChangeFirst} />
      <select onChange={onSelect}>
        {Object.entries(operandsToSigns).map(([operand, sign]) => (
          <option value={operand} selected={sign === selectedSign}>
            {sign}
          </option>
        ))}
      </select>
      <input type="number" value={values[1]} onChange={onChangeSecond} />
    </form>
  );
}

export { Calculator };
