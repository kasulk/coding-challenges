import { ChangeEvent, useState } from "react";

/**
  Challenge: 
  Make button disabled when there is no character on the input field. 
  Enable the `Submit` button (remove button from being disabled) 
  when there is at least one character.
**/
export default function App() {
  const [text, setText] = useState("");

  function handleChange(event: ChangeEvent): void {
    const input = event.target as HTMLTextAreaElement;
    setText(input.value);
  }

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={handleChange} />
      <button disabled={!text}>Submit</button>
    </>
  );
}
