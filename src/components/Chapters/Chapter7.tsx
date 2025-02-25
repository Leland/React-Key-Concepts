import { useRef } from "react";

export function Chapter7() {
  const nameRef = useRef<HTMLInputElement>(null);
  const programRef = useRef<HTMLSelectElement>(null);

  function formSubmitHandler(event: any) {
    event.preventDefault();
    console.log(nameRef.current?.value);
    console.log(programRef.current?.value);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className="form-control">
        <label htmlFor="program">Choose your program</label>
        <select id="program" ref={programRef}>
          <option value="basics">The Basics</option>
          <option value="advanced">Advanced Concepts</option>
          <option value="mastery">Mastery</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}
