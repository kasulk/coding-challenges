import { ChangeEvent, useState } from "react";
import "./App.css";

/** 
  Challenge: 
  Make this app work like a calculator that can add two numbers.
  Functionality: 
  When user place numbers on first and second input and hit the button. The sum should appear on the `Total: ` as an output. 
  Bonus:
  When user changes one of the inputs, calculate and update the sum value
**/

export default function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [total, setTotal] = useState(0);

  function handleNumber1Change(event: ChangeEvent) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    setNumber1(newValue);
    setTotal(Number(newValue) + Number(number2));
  }

  function handleNumber2Change(event: ChangeEvent) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    setNumber2(newValue);
    setTotal(Number(newValue) + Number(number1));
  }

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        onChange={handleNumber1Change}
      />
      <input
        placeholder="Second Number"
        type="number"
        onChange={handleNumber2Change}
      />

      {/* <button>Add Two Numbers</button> */}
      <p>Total: {total}</p>
    </div>
  );
}
