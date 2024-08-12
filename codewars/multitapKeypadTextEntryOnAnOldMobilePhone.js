function presses(phrase) {
  const keypad = [
    ["1"],
    ["ABC2"],
    ["DEF3"],
    ["GHI4"],
    ["JKL5"],
    ["MNO6"],
    ["PQRS7"],
    ["TUV8"],
    ["WXYZ9"],
    ["*"],
    [" 0"],
    ["#"],
  ];

  let numPresses = 0;

  return phrase
    .toUpperCase()
    .split("")
    .reduce((sum, char) => {
      for (const button of keypad) {
        const buttonChars = button[0].split("");
        numPresses = buttonChars.indexOf(char) + 1;
        if (numPresses) break;
      }

      return numPresses ? sum + numPresses : sum;
    }, 0);
}
