export const longest = (s1: string, s2: string): string => {
  // spread s1 and s2 into an array
  // create new Set of it
  // create array from new Set
  // sort array
  // convert array into string and return it

  return Array.from(new Set([...s1, ...s2]))
    .sort()
    .join("");
};
