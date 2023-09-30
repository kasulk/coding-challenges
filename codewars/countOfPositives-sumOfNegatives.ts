export function countPositivesSumNegatives(input: number[] | null): number[] {
  // loop through input array
  // if element is positive, increase a counter by 1
  // if element is negative, add it to a sum variable
  // return an array with the counter as first element and the sum as second element

  if (!input || !input.length) return [];

  let positivesCount = 0;
  let negativesSum = 0;

  input.forEach((number) =>
    number > 0 ? positivesCount++ : (negativesSum += number)
  );

  return [positivesCount, negativesSum];
}
