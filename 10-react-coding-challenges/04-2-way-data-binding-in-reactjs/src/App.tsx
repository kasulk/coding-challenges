import { ChangeEvent, useState } from "react";

/** 
  Challenge: User should be able to type in any characters on input and those character should show in the browser.
**/
export default function App() {
  const [text, setText] = useState("");

  function handleInputChange(event: ChangeEvent): void {
    const input = event.target as HTMLInputElement;
    setText(input.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={handleInputChange}
      />
      <p id="text-output">{text}</p>
    </>
  );
}
