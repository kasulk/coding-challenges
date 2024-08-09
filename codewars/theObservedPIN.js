function getPINs(observed) {
  const allPossibleNums = observed
    .split("")
    .map(Number)
    .map((digit) => getNeighbours(digit));

  if (allPossibleNums.length === 1) return allPossibleNums[0].map(String);

  let result;
  for (let i = 0; i < allPossibleNums.length - 1; i++) {
    const currArr = result || allPossibleNums[i];
    const nextArr = allPossibleNums[i + 1];

    result = getAllPossibleCombinationsFrom2Arrs(currArr, nextArr);
  }

  return result;
}

function getAllPossibleCombinationsFrom2Arrs(nums1, nums2) {
  const newNums = [];

  nums1.forEach((num1) => {
    nums2.forEach((num2) => {
      const newNum = String(num1) + String(num2);
      newNums.push(newNum);
    });
  });

  return newNums;
}

function getNeighbours(key) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [null, 0, null],
  ];

  const neighbours = [];

  keypad.forEach((row, i) => {
    if (row.includes(key)) {
      const prevRow = keypad[i - 1];
      const nextRow = keypad[i + 1];
      const j = row.indexOf(key);

      neighbours.push(key, row[j - 1], row[j + 1]);
      neighbours.push(prevRow ? prevRow[j] : null);
      neighbours.push(nextRow ? nextRow[j] : null);
    }
  });

  return neighbours.filter((num) => num !== null && num !== undefined);
}
