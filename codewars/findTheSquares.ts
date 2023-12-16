export const findSquares = (num: number): string => {
  const big = Math.trunc(num / 2) + 1;
  const small = Math.trunc(num / 2);

  return `${big * big}-${small * small}`;
};
