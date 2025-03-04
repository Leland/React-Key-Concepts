import { useState, useEffect } from "react";
import classes from "./NewPost.module.css";

export function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const config = {
      method: "POST",
      body: JSON.stringify({ title: enteredTitle }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", config);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button>Save</button>
    </form>
  );
}
