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

  return [...message]
    .map((char) => {
      let currResult = "";

      for (const button of keypad) {
        if (button.includes(char.toLowerCase())) {
          const currButton = button[0];
          const keyIndex = button.indexOf(char.toLowerCase());
          const isTopRow = !keyIndex;

          if (currButton === lastButton) currResult += " ";

          if (isTopRow) {
            lastButton = "";
            return currResult + currButton + "-";
          }

          if (
            (isLowerCaseLetter(char) && isUpperCaseMode) ||
            (isUpperCaseLetter(char) && !isUpperCaseMode)
          ) {
            isUpperCaseMode = !isUpperCaseMode;
            currResult = "#";
          }

          currResult += currButton.repeat(keyIndex);
          lastButton = currButton;
        }
      }

      return currResult;
    })
    .join("");
}

function isLowerCaseLetter(char: string): boolean {
  return /[a-z]/.test(char);
}

function isUpperCaseLetter(char: string): boolean {
  return /[A-Z]/.test(char);
}
