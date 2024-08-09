function getPINs(observed) {
  const allPossibleDigits = [...observed].map((digit) => getNeighbours(digit));

  if (observed.length === 1) return allPossibleDigits[0];

  let pins;

  for (let i = 0; i < allPossibleDigits.length - 1; i++) {
    const currArr = pins || allPossibleDigits[i];
    const nextArr = allPossibleDigits[i + 1];

    pins = getAllCombosFrom2Arrs(currArr, nextArr);
  }

  return pins;
}

function getAllCombosFrom2Arrs(strs1, strs2) {
  const newStrs = [];

  strs1.forEach((str1) => {
    strs2.forEach((str2) => newStrs.push(str1 + str2));
  });

  return newStrs;
}

function getNeighbours(key) {
  const keypad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["", "0", ""],
  ];

  return keypad
    .reduce((acc, row, i) => {
      if (row.includes(key)) {
        const j = row.indexOf(key);
        const prevRow = keypad[i - 1];
        const nextRow = keypad[i + 1];

        const numLeft = row[j - 1];
        const numRight = row[j + 1];
        const numUp = prevRow ? prevRow[j] : null;
        const numDown = nextRow ? nextRow[j] : null;

        acc.push(key, numLeft, numRight, numUp, numDown);
      }
      return acc;
    }, [])
    .filter((num) => num);
}
