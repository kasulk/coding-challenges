export const minValue = (values: number[]): number => {
  // remove duplicates from input array
  /// create a new Set of the input array
  // sort the remaining numbers
  // return the concatenated digits as number

  return Number(
    Array.from(new Set(values))
      .sort()
      .reduce((acc, curr) => (acc += curr), "")
  );
};
