export function sendMessage(message: string): string {
  const keypad = [
    "1.,?!",
    "2abc",
    "3def",
    "4ghi",
    "5jkl",
    "6mno",
    "7pqrs",
    "8tuv",
    "9wxyz",
    "*'-+=",
    "0 ",
    "#",
  ];

  let isUpperCaseMode = false;
  let lastButton = "";

  const result = message
    .split("")
    .map((char) => {
      let currResult = "";

      for (const button of keypad) {
        if (button.includes(char.toLowerCase())) {
          const currButton = button[0];
          const keyIndex = button.indexOf(char.toLowerCase());
          const isBottomRow = !!keyIndex;

          // e.g. number
          if (!isBottomRow) {
            if (currButton === lastButton) currResult += " ";
            lastButton = "";
            return currResult + currButton + "-";
          }

          if (currButton === lastButton) currResult += " ";

          if (isUpperCaseLetter(char)) {
            if (!isUpperCaseMode) {
              isUpperCaseMode = true;
              currResult = "#";
            }
          }
          // if is lowercase letter
          else {
            // and uppercase mode
            if (isUpperCaseMode && isLetter(char)) {
              isUpperCaseMode = false;
              currResult = "#";
            }
          }

          currResult += currButton.repeat(keyIndex);
          lastButton = currButton;
        }
      }

      return currResult;
    })
    .join("");

  return result;
}

function isLetter(char: string): boolean {
  return /[a-z]/i.test(char);
}
function isUpperCaseLetter(char: string): boolean {
  return /[A-Z]/.test(char);
}

// sendMessage("hey"); // "4433999"]

// const message = ["one two three", "666 6633089666084477733 33"];
// const message=        ["Hello World!", "#44#33555 5556660#9#66677755531111"]
// const message=        ["Def Con 1!", "#3#33 3330#222#666 6601-1111"]
// const message=        ["A-z", "#2**#9999"]
// const message=        ["1984", "1-9-8-4-"]
// const message=        ["Big thanks for checking out my kata", "#22#444 4084426655777703336667770222443322255444664066688 806999055282"]

// sendMessage(message[0]);
