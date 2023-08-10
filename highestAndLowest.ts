export class Kata {
  static highAndLow(numbers: string): string {
    // turn input into array
    // return Math.max and Math.min of the spreaded array

    const numbersArray = numbers.split(" ").map(Number);

    return `${Math.max(...numbersArray)} ${Math.min(...numbersArray)}`;
  }
}
