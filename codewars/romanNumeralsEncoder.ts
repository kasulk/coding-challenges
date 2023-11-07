export function solution(number: number): string {
  const reversedDigits = number.toString().split("").reverse();
  const output: string[] = [];
  const map: { [key: number]: string } = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  for (let i = 0; i < reversedDigits.length; i++) {
    //
    const digit = Number(reversedDigits[i]);
    const factor = Number("1" + "0".repeat(i));
    const factoredDigit = digit * factor;

    let digitToRoman = "";

    if (map[factoredDigit]) digitToRoman += map[factoredDigit];
    else {
      if (digit > 5) digitToRoman += map[5 * factor];
      digitToRoman += map[1 * factor].repeat(digit % 5);
    }

    output.push(digitToRoman);
  }

  return output.reverse().join("");
}
