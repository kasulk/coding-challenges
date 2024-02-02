export const mergeStrings = (first: string, second: string): string => {
  for (let i = 0; i < first.length; i++) {
    const firstEnd = first.slice(i, first.length);

    if (second.startsWith(firstEnd)) {
      return first.slice(0, i) + second;
    }
  }

  return first + second;
};
