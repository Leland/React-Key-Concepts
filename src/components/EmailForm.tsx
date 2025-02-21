import { useState } from "react";

function EmailForm({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: any) => void;
}) {
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (e: any) => {
    e.preventDefault();
    setIsValid(value.includes("@"));
  };

  return (
    <form
      style={{ border: "solid 1px black", padding: "20px" }}
      onSubmit={submitHandler}
    >
      <h2>Your email</h2>
      <label>
        Email address
        <input
          value={value}
          onChange={onChange}
          placeholder="example@example.com"
        />
      </label>
      <button type="submit">Submit</button>

      {!isValid && <p>Invalid email address entered!</p>}
    </form>
  );
}

export { EmailForm };
