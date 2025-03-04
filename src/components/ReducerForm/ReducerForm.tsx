import { useReducer } from "react";
import classes from "./ReducerForm.module.css";

const initialState = { email: "", password: "" };

type ACTIONTYPE =
  | { type: "CHANGE_EMAIL"; nextEmail: string }
  | { type: "CHANGE_PASSWORD"; nextPassword: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return { ...state, email: action.nextEmail };
    case "CHANGE_PASSWORD":
      return { ...state, password: action.nextPassword };
    default:
      throw new Error();
  }
}

export function ReducerForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function changeEmailHandler(event: any) {
    const value = event.target.value;
    dispatch({ type: "CHANGE_EMAIL", nextEmail: value });
  }

  function changePasswordHandler(event: any) {
    const value = event.target.value;
    dispatch({ type: "CHANGE_PASSWORD", nextPassword: value });
  }

  function submitFormHandler(event: any) {
    event.preventDefault();

    if (!formIsValid) {
      alert("Invalid form inputs!");
      return;
    }

    console.log("Good job!");
    console.log(state.email, state.password);
  }

  const formIsValid =
    state.email.trim().length > 7 && state.password.trim().length > 7;

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
