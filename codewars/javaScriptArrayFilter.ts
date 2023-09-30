export const getEvenNumbers = (numbersArray: number[]): number[] => {
  return numbersArray.filter((number) => !(number % 2));
};
