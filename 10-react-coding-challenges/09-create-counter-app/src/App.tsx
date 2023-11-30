import { useState } from "react";
import "./App.css";
/**
  Challenge: 
  Pressing `Increment` button should increase the counter count by 1. 
  Pressing `Decrement` button should decrease the counter count by 1.
**/
export default function App() {
  const [] = useState(0);

  return (
    <div>
      <h2>Counter: 0</h2>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
}
