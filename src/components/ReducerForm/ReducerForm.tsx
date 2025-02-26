import { useReducer, useState } from "react";
import classes from "./ReducerForm.module.css";

const initialState = { email: "", password: "", valid: true };

type ACTIONTYPE =
  | { type: "changedEmail"; nextEmail: string }
  | { type: "changedPassword"; nextPassword: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "changedEmail":
      return { ...state, email: action.nextEmail };
    case "changedPassword":
      return { ...state, password: action.nextPassword };
    default:
      throw new Error();
  }
}

// const isEmailValid = (email: string) => email.trim().length > 7;
// const isPasswordValid = (password: string) => password.trim().length > 7;

export function ReducerForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function changeEmailHandler(event: any) {
    const value = event.target.value;
    dispatch({ type: "changedEmail", nextEmail: value });
  }

  function changePasswordHandler(event: any) {
    const value = event.target.value;
    dispatch({ type: "changedPassword", nextPassword: value });
  }

  function submitFormHandler(event: any) {
    event.preventDefault();

    // if (!formIsValid) {
    //   alert("Invalid form inputs!");
    //   return;
    // }

    // console.log("Good job!");
    // console.log(state.email, state.password);
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input
          value={state.email}
          id="email"
          type="email"
          onChange={changeEmailHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input
          value={state.password}
          id="password"
          type="password"
          onChange={changePasswordHandler}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
