import { useState } from "react";
import "./App.css";
/**
  Challenge: 
  Pressing `Increment` button should increase the counter count by 1. 
  Pressing `Decrement` button should decrease the counter count by 1.
**/
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
