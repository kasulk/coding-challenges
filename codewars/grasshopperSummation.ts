export const summation = (num: number) => {
  return Array(num)
    .fill("x")
    .reduce((sum, _, i) => sum + i + 1, 0);
};
