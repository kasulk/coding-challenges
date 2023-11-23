export function circleOfNumbers(num: number, firstNumber: number): number {
  return (firstNumber + num / 2) % num;
}
