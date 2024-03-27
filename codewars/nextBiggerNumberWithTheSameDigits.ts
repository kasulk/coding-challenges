export function nextBigger(num: number): number {
  const digits = [...num.toString()].map(Number);
  const revDigits = [...digits].reverse();

  for (let i = 0; i < digits.length; i++) {
    const curr = revDigits[i];
    const lastDigits = revDigits.slice(0, i);
    const remainingDigits = revDigits.slice(i + 1, revDigits.length).join("");
    const lastWithCurr = revDigits.slice(0, i + 1);

    // remove every digit that is smaller than curr
    const greaterCurr = lastDigits.filter((digit) => digit > curr);
    if (!greaterCurr.length) continue;

    const nextGreaterCurr = greaterCurr.sort((a, b) => a - b)[0];

    // remove nextGreaterCurr from last with curr
    const newEnd =
      lastWithCurr
        .join("")
        .replace(String(nextGreaterCurr), "")
        .split("")
        .map(Number)
        .sort((a, b) => b - a)
        .join("") + nextGreaterCurr;

    return Number(
      (newEnd + remainingDigits).toString().split("").reverse().join("")
    );
  }

  return -1;
}
