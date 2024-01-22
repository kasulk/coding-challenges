export const numberJoy = (num: number): boolean => {
  const digitSum = num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  const digitSumReversed = Number(
    digitSum.toString().split("").reverse().join("")
  );

  return digitSum * digitSumReversed === num;
};
