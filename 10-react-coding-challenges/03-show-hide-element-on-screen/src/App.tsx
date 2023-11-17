import { useState } from "react";
/**
  Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed
  
**/
export default function App() {
  const [showDiv, setShowDiv] = useState(true);

  return (
    <>
      <button onClick={() => setShowDiv(!showDiv)}>Hide Element Below</button>
      {showDiv && <div>Toggle Challenge</div>}
    </>
  );
}
