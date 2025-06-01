import { useState } from "react";

export function useInput(inputValue) {
  const [input, setInput] = useState(inputValue);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const reset = () => {
    setInput("");
  };

  return { input, onChange, reset };
}
