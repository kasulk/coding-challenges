import { useState } from "react";
/** 
  Challenge: 
  Parent text (I need to be updated from my child) 
  should be updated when Child button below is clicked. 
  Feel free to use any string to update the parent's current string.
**/
interface IChildProps {
  onButtonClick: (value: string) => void;
}

export function Child({ onButtonClick }: IChildProps) {
  return (
    <>
      <div>Child</div>
      <button onClick={() => onButtonClick("I got updated!")}>
        Change Parent Value
      </button>
    </>
  );
}

export default function Parent() {
  const [value, setValue] = useState("I need to be updated from my child");

  function handleUpdate(newValue: string): void {
    setValue(newValue);
  }

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child onButtonClick={handleUpdate} />
      </div>
    </>
  );
}
