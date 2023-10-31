export function automorphic(num: number): string {
  // square the input number
  // check if the input number appears at the end of the result

  const square = String(num * num);
  const numEndRegEx = new RegExp(`${num}$`);

  return numEndRegEx.test(square) ? "Automorphic" : "Not!!";
}
