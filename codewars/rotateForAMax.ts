export function maxRot(num: number): number {
  const digits = num.toString().split("");
  let rotDigits = [...digits];

  const rotNums = [num];

  digits.forEach((_, i) => {
    const fixedHead = rotDigits.slice(0, i);
    const rotTail = [...rotDigits.slice(i + 1), rotDigits[i]];
    rotDigits = [...fixedHead, ...rotTail];
    const rotNum = Number(rotDigits.join(""));

    rotNums.push(rotNum);
  });

  return Math.max(...rotNums);
}
