export function nextBigger(num: number): number {
  const digits = [...num.toString()].map(Number);
  const revDigits = [...digits].reverse();
  const numDigits = digits.length;

  for (let i = 0; i < numDigits; i++) {
    const curr = revDigits[i];
    const endWithCurr = revDigits.slice(0, i + 1);
    const endWithoutCurr = revDigits.slice(0, i);
    const remainingDigits = revDigits.slice(i + 1, numDigits);

    const greaterCurr = endWithoutCurr.filter((digit) => digit > curr);
    if (!greaterCurr.length) continue;

    const nextGreaterCurr = greaterCurr.sort((a, b) => a - b)[0];

    const newEndWithCurr = removeOneFromDigits(
      nextGreaterCurr,
      endWithCurr
    ).sort((a, b) => b - a);

    const newNumStr = [...newEndWithCurr, nextGreaterCurr, ...remainingDigits]
      .reverse()
      .join("");

    return Number(newNumStr);
  }

  return -1;
}

function removeOneFromDigits(digit: number, digits: number[]): number[] {
  return digits.join("").replace(String(digit), "").split("").map(Number);
}
