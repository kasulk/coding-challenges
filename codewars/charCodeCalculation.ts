export const calc = (str: string): number => {
  // add the char code of each character to a variable
  // create another variable with the 7s with 1s replaced
  // subract the sum of the digits of the latter from the sum of the digits of the former

  const total1 = str
    .split("")
    .reduce((acc, _, i) => acc + str.charCodeAt(i), "");

  const total2 = total1.replace(/7/g, "1");

  return (
    total1.split("").reduce((sum, digit) => sum + Number(digit), 0) -
    total2.split("").reduce((sum, digit) => sum + Number(digit), 0)
  );
};
