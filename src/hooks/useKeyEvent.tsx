import { useState, useEffect } from "react";

export function useKeyEvent(allowedKeys: string[]) {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  useEffect(() => {
    function keyPressedHandler(event: KeyboardEvent) {
      const pressedKey = event.key;

      if (!allowedKeys.includes(pressedKey)) {
        alert("Invalid key!");
        return;
      }
      setPressedKey(pressedKey);
    }

    window.addEventListener("keydown", keyPressedHandler);

    return () => window.removeEventListener("keydown", keyPressedHandler);
  }, [allowedKeys]);

  return pressedKey;
}
