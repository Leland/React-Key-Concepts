import { useKeyEvent } from "../hooks/useKeyEvent";

const ALLOWED_KEYS = ["c", "s", "p"];

export function Chapter11() {
  const pressedKey = useKeyEvent(ALLOWED_KEYS);
  let output = "";

  if (pressedKey === "s") {
    output = "😊";
  } else if (pressedKey === "c") {
    output = "😭";
  } else if (pressedKey === "p") {
    output = "🎉";
  }

  return (
    <main>
      <h1>Press a key!</h1>
      <p>
        Supported keys: <kbd>s</kbd>, <kbd>c</kbd>, <kbd>p</kbd>
      </p>
      <p id="output">{output}</p>
    </main>
  );
}
